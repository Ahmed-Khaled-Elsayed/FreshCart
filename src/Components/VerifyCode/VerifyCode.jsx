import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function VerifyCode() {
    const [code, setCode] = useState("");
    const navigate = useNavigate()

    async function verifyResetCode() {
        
        
        try {
            const data =await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
                { resetCode: code }
            )
           
            navigate("/resetpassword")
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    }
  return (
    <div>
          <div className="py-24">
      <div className=" mx-auto text-center w-[50%] shadow-md p-6">
        <h1 className="text-center text-main font-bold text-3xl">verification code</h1>
        <p className='my-5  mx-auto'>please enter the code sent to your email</p>
        <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             CODE
            </label>
            <input
                 value={code}
              type="text"
              
              onChange={(e) => setCode(e.target.value)}
              className="shadow-xs  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder=""
            />
          </div>
          <button
          onClick={verifyResetCode}
            type="submit"
            className="mx-auto block text-white bg-main hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {/* {loading ? (
              <i className="fa-solid fa-spin fa-spinner text-white"></i>
            ) : (
              "Login"
            )} */}
            send
          </button>
        </div>
        </div>
    </div>
  )
}

export default VerifyCode

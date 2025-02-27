import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    async function forgetPassword() {
        if (!email) {
            toast.error("Please enter your email.");
            return;
          }

        try {
            const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
                {email}
            )
            
            navigate("/verifycode")
        } catch (error) {
            console.log(error);
        }
    }



  return (
    <div>
          <div className="py-24">
      <div className=" mx-auto text-center w-[50%] shadow-md p-6">
        <h1 className="text-center text-main font-bold text-3xl">Forget Password</h1>
        <p className='my-5  mx-auto'>please enter your Email and we will send you a reset code</p>
        <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email 
            </label>
            <input
                value={email}
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-xs  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder=""
            />
          </div>
          <button
          onClick={forgetPassword}
            type="submit"
            className="mx-auto block text-white bg-main hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            
            send
          </button>
        </div>
        </div>
    </div>
  )
}

export default ForgetPassword

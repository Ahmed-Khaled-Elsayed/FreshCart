import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';


function ResetPassword() {

    const navigate = useNavigate()


    async function reset(values) {
       
        try {
          
          
          const response = await axios.put(
            "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
            values
          );
          
          toast.success("password changed successfully")
          navigate("/login");
        } catch (error) {
            console.log(error);
            
        }
      }


      const user = {
        email: "",
        newPassword: "",
      };  
      
      const validationSchema = Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("this field is required"),
            newPassword: Yup.string()
            .matches(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
              "password must be 6 or more characters with uppercase , lowercase and digits"
            )
            .required("this field is required"),
        });
    
      const formik = useFormik({
        initialValues: user,
        onSubmit: reset,
        validationSchema: validationSchema,
      });

  return (
    <div className="py-24">
      <div className="container mx-auto ">
        <h1 className="text-center text-main font-bold text-4xl">Reset Password</h1>

        <form className="max-w-xl mx-auto" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email :
            </label>
            <input
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              id="email"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder=""
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <div
              class="p-1 ps-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span class="font-medium me-2">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </span>{" "}
              {formik.errors.email}
            </div>
          ) : (
            ""
          )}

          <div className="mb-3">
            <label
              htmlFor="newPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Password :
            </label>
            <input
              value={formik.values.newPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              id="newPassword"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder=""
            />
          </div>
          {formik.errors.newPassword && formik.touched.newPassword ? (
            <div
              class="p-1 ps-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span class="font-medium me-2">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </span>{" "}
              {formik.errors.newPassword}
            </div>
          ) : (
            ""
          )}

          <div className="flex items-center">
            
          <button
            type="submit"
            className="ms-auto block text-white bg-main hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {/* {loading ? (
              <i className="fa-solid fa-spin fa-spinner text-white"></i>
            ) : (
              "Login"
            )} */}
           reset
          </button>
          </div>
        </form>
      </div>
    </div>
  )
  
}

export default ResetPassword

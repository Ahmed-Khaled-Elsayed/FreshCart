import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(0);

  const user = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be 3 or more characters")
      .max(50, "Must be 50 characters or less")
      .required("this field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("this field is required"),
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
        "password must be 6 or more characters with uppercase , lowercase and digits"
      )
      .required("this field is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "RePassword Must match with Password")
      .required("this field is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid phone Number")
      .required("this field is required"),
  });

  async function signup(values) {
    setloading(1);
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );

      toast.success(response.data.message);
      setloading(0);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setloading(0);
    }
  }

  const formik = useFormik({
    initialValues: user,
    onSubmit: signup,
    validationSchema: validationSchema,
  });

  return (
    <div className="py-7">
      <div className="container mx-auto ">
        <h1 className="text-center text-main font-bold text-4xl">Register</h1>

        <form className="max-w-xl mx-auto" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name :
            </label>
            <input
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              id="name"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder=""
            />
          </div>
          {formik.errors.name && formik.touched.name ? (
            <div
              class="p-1 ps-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span class="font-medium me-2">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </span>{" "}
              {formik.errors.name}
            </div>
          ) : (
            ""
          )}

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
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone :
            </label>
            <input
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="tel"
              id="phone"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder=""
            />
          </div>
          {formik.errors.phone && formik.touched.phone ? (
            <div
              class="p-1 ps-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span class="font-medium me-2">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </span>{" "}
              {formik.errors.phone}
            </div>
          ) : (
            ""
          )}

          <div className="mb-3">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password :
            </label>
            <input
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              id="password"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder=""
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <div
              class="p-1 ps-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span class="font-medium me-2">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </span>{" "}
              {formik.errors.password}
            </div>
          ) : (
            ""
          )}
          <div className="mb-3">
            <label
              htmlFor="rePassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              rePassword :
            </label>
            <input
              value={formik.values.rePassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              id="rePassword"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder=""
            />
          </div>
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div
              class="p-1 ps-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span class="font-medium me-2">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </span>{" "}
              {formik.errors.rePassword}
            </div>
          ) : (
            ""
          )}

          <button
            type="submit"
            className="ms-auto block text-white bg-main hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? (
              <i className="fa-solid fa-spin fa-spinner text-white"></i>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

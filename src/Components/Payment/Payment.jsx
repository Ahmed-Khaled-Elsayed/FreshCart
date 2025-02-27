import React, { useContext, useState } from "react";
import { cartcontext } from "../../Context/CartContext";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Payment() {
  const { cartId, setProducts, setNoOfItems, setTotalPrice } =
    useContext(cartcontext);
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [loading, setloading] = useState(0);
  const navigate = useNavigate()
  async function cashPay() {
    setloading(1);
    const x = {
      shippingAddress: {
        details: details,
        phone: phone,
        city: city,
      },
    };

    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        x,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setProducts([]);
      setNoOfItems(0);
      setTotalPrice(0);
      setloading(0);
      navigate("/allorders")
      toast.success("order done successfully")
    } catch (error) {
      toast.error(error.response.data.message)
      setloading(0);
    }
  }

  async function onlinePay() {
    setloading(1);
    const x = {
      shippingAddress: {
        details: details,
        phone: phone,
        city: city,
      },
    };

    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
        x,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
          params: {
            url: "http://localhost:5173",
          },
        }
      );

      setloading(0);

      window.open(data.session.url);
    } catch (error) {
      console.log(error);
      setloading(0);
    }
  }
  return (
    <div className="w-[60%] mt-5 p-5 mx-auto text-center">
      <div className="mb-3 ">
        <label
          htmlFor="details"
          className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
        >
          Details
        </label>
        <input
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          type="text"
          id="details"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          placeholder=""
        />
      </div>

      <div className="mb-3 ">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
        >
          Phone
        </label>
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="tel"
          id="phone"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          placeholder=""
        />
      </div>

      <div className="mb-3 ">
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
        >
          City
        </label>
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          id="city"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          placeholder=""
        />
      </div>
      <button
        type="button"
        onClick={cashPay}
        className="text-blue-500 mx-auto bg-white hover:bg-red-500focus:outline-none border-2 hover:bg-blue-500 hover:text-white border-blue-500 font-medium rounded-md text-sm px-2 py-1 text-center me-2 mb-2 "
      >
        {loading ? (
          <i className="fa-solid fa-spin fa-spinner text-white mr-2"></i>
        ) : (
          <i className="fa-solid fa-money-bill-wave mr-2 "></i>
        )}
        Cash Payment
      </button>
      <button
        type="button"
        onClick={onlinePay}
        className="text-blue-500 mx-auto bg-white hover:bg-red-500focus:outline-none border-2 hover:bg-blue-500 hover:text-white border-blue-500 font-medium rounded-md text-sm px-2 py-1 text-center me-2 mb-2 "
      >
        {loading ? (
          <i className="fa-solid fa-spin fa-spinner text-white mr-2"></i>
        ) : (
          <i className="fa-solid fa-money-bill-wave mr-2 "></i>
        )}
        Online Payment
      </button>
    </div>
  );
}

export default Payment;

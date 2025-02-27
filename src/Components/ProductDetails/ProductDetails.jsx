import React, { useContext } from "react";
import img from "./../../assets/images/blog-img-2.jpeg";
import { MutatingDots } from "react-loader-spinner";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { cartcontext } from "../../Context/CartContext";
import toast from "react-hot-toast";
function ProductDetails() {


  const { addToCart } = useContext(cartcontext);
  const { id } = useParams();

  async function addProductToCart() {
    const data = await addToCart(id);
    
    if (data.status == "success") {
      toast.success(data.message);
    }
  }

  async function getProductDetails() {
    return await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }

  const { data, isLoading } = useQuery(
    `productDetails:${id}`,
    getProductDetails
  );

  return (
    <>
      {!isLoading ? (
        <div className="w-full sm:w-[80%] mx-auto p-8 m-5 shadow-md">
          <div className="flex flex-wrap sm:flex-row flex-col justify-center items-center">
            <div className="w-[60%] sm:w-1/3 p-5">
              <img src={data.data.data.imageCover} className="w-full" alt="" />
            </div>
            <div className="w-full sm:w-2/3 p-5">
              <h1 className="font-medium mb-2 text-xl">
                {data.data.data.title}
              </h1>
              <p className="font-light text-gray-400 mb-2 p-1">
                {data.data.data.description}
              </p>
              <span className=" block ">{data.data.data.category.name}</span>
              <div className="flex justify-between items-center mt-2">
                <div className="">{data.data.data.price} EGP</div>
                <div className="text-gray-400">
                  <i className="fa-solid fa-star me-1 text-sm text-yellow-300"></i>
                  {data.data.data.ratingsAverage}
                </div>
                {/* </div> */}
              </div>
              <button
                onClick={addProductToCart}
                className="bg-main w-full hover:text-black text-center p-1 rounded mt-3 text-white"
              >
                + add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
}

export default ProductDetails;

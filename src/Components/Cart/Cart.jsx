import React, { useContext } from "react";
import img from "./../../assets/images/cart-empty.png";
import { cartcontext } from "../../Context/CartContext";
import { MutatingDots } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

function Cart() {
const {products, totalPrice,loading ,updateCount , removeItem ,clearCart } = useContext(cartcontext)

if(loading)
{
  return  <div className="flex justify-center items-center h-screen">
          
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
}


else{
  return (
    <>
    {products?.length!=0 ? <div>
      <div className="w-[80%] bg-second mx-auto p-5 mt-5 shadow-lg mb-5 min-h-96">
        <h1 className="text-2xl font-semibold">Shop Cart :</h1>
        <h3 className="text-main font-medium mb-5">
          Total Cart Price : {totalPrice} EGP
        </h3>
        <div className="flex">
        <Link to="/payment">
        <button
                    type="button"
                    className="text-blue-500 ms-auto block bg-white hover:bg-red-500focus:outline-none border-2 hover:bg-blue-500 hover:text-white border-blue-500 font-medium rounded-md text-sm px-2 py-1 text-center me-2 mb-2 "
                  >
                    <i className="fa-solid fa-money-bill-wave mr-2 "></i> Payment
                  </button>
        </Link>
        <button
                  onClick={clearCart}
                    type="button"
                    className="text-red-500  block bg-white hover:bg-red-500focus:outline-none border-2 hover:bg-red-500 hover:text-white border-red-500 font-medium rounded-md text-sm px-2 py-1 text-center me-2 mb-2 "
                  >
                    <i className="fa-solid fa-trash-can mr-2 "></i> Clear Cart
                  </button>
        </div>

        {
          products?.map((item ,idx)=>{
            return <div key={idx} className="flex flex-col sm:flex-row justify-between items-center border-b-2 border-gray-200 p-2">
            <div className=" w-full sm:w-5/6 flex items-center gap-3">
              <div className="w-2/5 sm:w-1/5">
                <img className="w-full h-[120px]" src={item.product.imageCover} alt="" />
              </div>
              <div className="w-3/5 sm:w-4/5">
                <div className="text-xl font-semibold">{item.product.title}</div>
                <div className=" mb-2">Price : {item.price} EGP</div>
                <div className="">
                  <button
                  onClick={()=>{removeItem(item.product.id)}}
                    type="button"
                    className="text-main bg-white hover:bg-mainfocus:outline-none border-2 hover:bg-main hover:text-white border-main font-medium rounded-md text-sm px-2 py-1 text-center me-2 mb-2 "
                  >
                    <i className="fa-solid fa-trash-can mr-2 "></i> Remove
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-full sm:w-1/6 flex items-center justify-center">
            <button
            onClick={()=>{updateCount(item.product.id  , item.count-1)}}
                    type="button"
                    className="text-main bg-white hover:bg-mainfocus:outline-none border-2 hover:bg-main hover:text-white border-main font-medium rounded-md text-sm w-[30px]  py-1 text-center   "
                  >
                     -
                  </button>
  
                  <div className="mx-2">{item.count}</div>
                  <button
                   onClick={()=>{updateCount(item.product.id  ,item.count+1)}}
                    type="button"
                    class="text-main bg-white hover:bg-mainfocus:outline-none border-2 hover:bg-main hover:text-white border-main font-medium rounded-md text-sm w-[30px] py-1 text-center   "
                  >
                    +
                  </button>
            </div>
          </div>
          })
        }
      </div>
    </div> : <div className="w-[80%]  mx-auto p-5 mt-5 shadow-lg mb-5 min-h-96 flex flex-col justify-center items-center">
      <h1 className="text-main  text-2xl">Your Cart is Empty !!</h1>
      <img src={img} alt="" className="w-[50%] rounded-md"/>
      
      </div>}
    </>
    
  );
}
}

export default Cart;

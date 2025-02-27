import React, { useContext } from 'react'
import { wishContext } from '../../Context/WishContext'
import logo from './../../assets/images/logo.svg'
import { cartcontext } from '../../Context/CartContext'
import toast from "react-hot-toast";
import img from "./../../assets/images/cart-empty.png";


function WishList() {
    const {getUserWishList, removeProductFromWishList ,wishList} = useContext(wishContext)
    const {addToCart} = useContext(cartcontext)

    async function addProductToCart(id) {
      const data = await addToCart(id);
      
      if (data.status == "success") {
        toast.success(data.message);
      }
    }
  return (
    <>{wishList?.length != 0? <div>
      <div className="w-full sm:w-[80%] bg-second mx-auto p-5 mt-5 shadow-lg mb-5 min-h-96">
        <h1 className="text-2xl font-semibold mb-2">WishList :</h1>
       

        {wishList?.map((item , idx)=>{
            return (<div key={idx} className="flex flex-col sm:flex-row justify-between items-center border-b-2 border-gray-200 p-2">
            <div className="w-full sm:w-5/6 flex items-center gap-3">
              <div className="w-1/3 sm:w-1/5">
                <img className="w-full h-[120px]" src={item.imageCover} alt="" />
              </div>
              <div className="w-2/3 sm:w-4/5">
                <div className="text-xl font-semibold">{item.title}</div>
                <div className=" mb-2">Price : {item.price}  EGP</div>
                <div className="">
                  <button
                  onClick={()=>{removeProductFromWishList(item._id)}}
                    type="button"
                    className="text-red-500 bg-white hover:bg-mainfocus:outline-none border-2 hover:bg-red-500 hover:text-white border-red-500 font-medium rounded-md text-sm px-2 py-1 text-center me-2 mb-2 "
                  >
                    <i className="fa-solid fa-trash-can mr-2 "></i> Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/6 text-center">
            <button
                  onClick={()=>{addProductToCart(item.id)}}
                    type="button"
                    className="text-main bg-white hover:bg-mainfocus:outline-none border-2 hover:bg-main hover:text-white border-main font-medium rounded-md text-sm px-2 py-1 text-center me-2 mb-2 "
                  >
                    + add to cart
                  </button>
            </div>
          </div>)
        })}
        
        
        
      </div>
    </div> : <div className="w-full sm:w-[80%]  mx-auto p-5 mt-5 shadow-lg mb-5 min-h-96 flex flex-col justify-center items-center">
          <h1 className="text-main  text-2xl">WishList is Empty !!</h1>
          <img src={img} alt="" className="w-[50%] rounded-md"/>
          
          </div>}</>
    
    
  )
}

export default WishList

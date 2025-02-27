import React, { useEffect, useState ,useContext } from "react";
import axios from "axios";
import { MutatingDots } from 'react-loader-spinner'
import { useQuery } from "react-query";
import HomeSlider from "../HomeSlider/HomeSlider";
import CategorySlider from "../CategorySlider/CategorySlider";
import { Navigate, useNavigate } from "react-router-dom";
import { cartcontext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { wishContext } from "../../Context/WishContext";

function Home() {

  const [products , setProducts] = useState(null)
  const navigate = useNavigate();
  const { addToCart } = useContext(cartcontext);
  const {removeProductFromWishList ,addToWishList , wishList} = useContext(wishContext)

async function addProductToCart(id) {
  const data = await addToCart(id);
  if (data.status == "success") {
    toast.success(data.message);
  }
}

  async function getAllProducts() {
    
       return await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products")
   
  }

  const {data , isLoading} = useQuery("products" , getAllProducts) 

 function getDetails(id)
 {
   navigate(`/productDetails/${id}`)
 }
  
  return (
    <div>
      
    {!isLoading ? <>
    <HomeSlider/>
      <CategorySlider/>
    <div className=" w-[95%] flex flex-wrap items-center mx-auto p-7">
     {
      data?.data.data.map(function(product , idx){
        return(<div key={idx}  className="item w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 my-5 hover:cursor-pointer hover:scale-110 transition duration-500">
          <div className="bg-second   rounded p-3">

          <div onClick={()=>{getDetails(product.id)}}  className="">
          <img src={product.imageCover} alt="product image" className="w-full rounded h-40 "/>
          <h3 className="text-main">{product.category.name}</h3>
          <h2 className=" ">{product.title.split(" ").splice(0,2).join(" ")}</h2>
          <div className="flex justify-between items-center mt-2">
            <div className="">{product.price} EGP</div>
            
            <div className="text-gray-400"><i className="fa-solid fa-star me-1 text-yellow-300"></i>{product.ratingsAverage}</div>
          
          </div>
          </div>
          
          <div className="flex justify-between items-center mt-3">
          <button onClick={()=>{addProductToCart(product.id)}} className='bg-main w-full hover:text-black text-center p-1 rounded text-sm  mx-auto block text-white'>+ add to cart</button>
          {wishList?.some(item => item.id === product.id) ? (
    <i onClick={()=>{removeProductFromWishList(product.id)}} className="fa-solid fa-heart block p-1 text-lg text-red-500 cursor-pointer"></i>
  ) : (
    <i onClick={()=>{addToWishList(product.id)}} className="fa-solid fa-heart block p-1 text-lg cursor-pointer"></i>
  )}
          
</div>
          </div>
          
        
        
        
        </div>)
      })
     }
      
      
     </div> </>: <div className="flex justify-center items-center h-screen">
        
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

      




     
    </div>
    
  );
}

export default Home;

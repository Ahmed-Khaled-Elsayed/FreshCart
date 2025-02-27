import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { useQuery } from 'react-query';
import axios from "axios";

function AllOrders() {

    const {id} = jwtDecode(localStorage.getItem("token"));
    
    async function getAllOrders()
    {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
    }
    const {data} = useQuery("allOrders" , getAllOrders)
    
    
  return (
    <div className='w-full sm:w-[60%] bg-second mx-auto p-5 mt-5 shadow-lg mb-5 min-h-96'>
        <h1 className='font-bold text-main text-xl'>Orders :</h1>
      {
        data?.data?.map((item ,idx)=>{
                    return <div key={idx} className="  border-b-2 border-gray-200 p-2">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="w-full sm:w-4/6 flex items-center gap-3">
                     
                     <div className="w-4/5">
                       <div className=" font-semibold">Order Date : {item.createdAt}</div>
                       <div className=" mb-2 text-main">Total Price : {item.totalOrderPrice} EGP</div>
                       
                     </div>
                   </div>
                   <div className="w-full sm:w-2/6 ">
                   <div className="text-main">Payment Method : {item.paymentMethodType}</div>

                   <div className="">Delivered : {item.isDelivered ? "Done" : "NO" }</div>
                   <div className="">isPaid : {item.isPaid ? "Done" : "NO"}</div>
                   </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                    {item.cartItems.map((x ,idx)=>{
                        return <div className="w-1/2 sm:w-[30%] md:w-[20%] m-2 text-center">
                            <img src={x.product.imageCover} alt="product image" className="w-full rounded h-28 sm:h-40 "/>
          <h3 className="text-main">{x.product.category.title}</h3>
          <h2 className=" ">{x.product.title.split(" ").splice(0,2).join(" ")}</h2>
          <h2 className=" ">Price : {x.price} EGP</h2>
                        </div>
                    })}
                    </div>
                  </div>
                  })
      }
    </div>
  )
}

export default AllOrders

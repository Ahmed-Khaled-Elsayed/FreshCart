import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios";
import toast from 'react-hot-toast';
import { data } from 'react-router-dom';
import { authContext } from './AuthContext';

export const cartcontext = createContext();
function CartContextProvider({children}) {
    const { token} = useContext(authContext)
    const [products ,setProducts] = useState(null)
    const [noOfItems , setNoOfItems] = useState(0)
    const [totalPrice , setTotalPrice]  = useState(0)
    const [cartId , setcartId]  = useState(0)
    const [loading , setLoading] = useState(0)
    async function addToCart(id)
    {
        try {
           const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart",
                {
                    productId: id
                },
                {   headers:{
                    token : localStorage.getItem("token")}
                }
            )

            getUserCart()

            return data
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    async function getUserCart() {
        setLoading(1)
        try {
            const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart" , 
                {
                    headers:{
                        token : localStorage.getItem("token")
                    }
                }
            ) 
            setProducts(data.data.products)
            setNoOfItems(data.numOfCartItems)
            setTotalPrice(data.data.totalCartPrice)
            setcartId(data.data._id)
            setLoading(0)
        } catch (error) {
            console.log(error);
            setLoading(0)
            
        }
        
    }

    async function updateCount(id , count)
    {
        try {
            const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {
                count : count
            },{
                headers:{
                    token : localStorage.getItem("token")
                }
            })
            setProducts(data.data.products)
            setNoOfItems(data.numOfCartItems)
            setTotalPrice(data.data.totalCartPrice)

        } catch (error) {
            console.log(error);
            
        }
    }

    async function removeItem(id)
    {
        try {
            const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
                headers:{
                    token : localStorage.getItem("token")
                }
            })
            setProducts(data.data.products)
            setNoOfItems(data.numOfCartItems)
            setTotalPrice(data.data.totalCartPrice)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async function clearCart()
    {
        try {
            const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
                headers:{
                    token : localStorage.getItem("token")
                }
            })
            setProducts([])
            setNoOfItems(0)
            setTotalPrice(0)
           
            
            
        } catch (error) {
            console.log(error);
            
        }
    }


    useEffect(function(){
        if(token != null)
            getUserCart()
    },[token])
    
  return (
    <cartcontext.Provider value={
        {
            addToCart,
            products,
            noOfItems,
            totalPrice,
            loading,
            updateCount,
            removeItem,
            clearCart,
            cartId,
            setProducts,
            setNoOfItems,
            setTotalPrice
        }
    }>
      {children}
    </cartcontext.Provider>
  )
}

export default CartContextProvider

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import toast from "react-hot-toast";

export const wishContext = createContext();
function WishContextProvider({ children }) {
  const { token } = useContext(authContext);
  const [wishList , setWishList] = useState(null)

  async function addToWishList(id) {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          productId: id,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      
      getUserWishList()
      toast.success(data.message);
      
      
    } catch (error) {
      toast.error("Failed to add product to wishlist.");
      
    }
  }

  async function getUserWishList() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setWishList(data.data)
      
    } catch (error) {
      console.log(error);
    }
  }

  async function removeProductFromWishList(id) {
    try {

      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      
      getUserWishList()
      toast.success(data.message);
 
    } catch (error) {
      toast.error("Failed to remove product from wishlist.");
      
    }
  }



  useEffect(function(){
          if(token != null)
              getUserWishList()
      },[token])

  return (
    <wishContext.Provider
      value={{ 
        wishList,
        addToWishList, 
        getUserWishList, 
        removeProductFromWishList
     }}
    >
      {children}
    </wishContext.Provider>
  );
}

export default WishContextProvider;

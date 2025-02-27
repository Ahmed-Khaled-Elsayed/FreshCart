import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function Categories() {


    const navigate = useNavigate();
    async function getCategories() {
        return await axios.get("https://ecommerce.routemisr.com/api/v1/categories"); 
    }
    const {data} = useQuery("categories", getCategories)
    function getSubCategories(id) {
        navigate(`/subcategories/${id}`)
    }
    
  return (
    <div className="w-[80%] mx-auto pt-5 text-center">
      <h1 className="text-main text-3xl font-semibold">Categories</h1>
      <div className="flex flex-wrap items-center">
        {data?.data.data.map((category , idx)=>{
            return(<div key={idx} onClick={()=>{getSubCategories(category._id)}} className="item w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 my-5 hover:cursor-pointer hover:scale-110 transition duration-500">
        <div className="bg-second   rounded p-3 text-center">
          <div className="">

            <img
              src={category.image}
              alt="category image"
              className="w-full rounded h-40 "
            />

            <h3 className="text-main mx-auto ">{category.name}</h3>
          </div>
        </div>
      </div>)
        })}
      
      </div>
    </div>
  );
}

export default Categories;

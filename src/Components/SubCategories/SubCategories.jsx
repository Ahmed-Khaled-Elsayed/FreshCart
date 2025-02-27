import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function SubCategories() {
  const { id } = useParams();

  async function getSubCats() {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`
    );
  }

  const { data } = useQuery("subCats", getSubCats);


  return (
    <div className="w-[80%] mx-auto pt-5 min-h-[450px] text-center">
      <h1 className="text-main text-3xl font-semibold">SubCategories</h1>
      {data?.data.data.length != 0 ? (
        <div className="flex flex-wrap items-center">
          {data?.data.data.map((category, idx) => {
            return (
              <div
                key={idx}
                className="item w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 my-5 hover:cursor-pointer hover:scale-110 transition duration-500 "
              >
                <div className="bg-second h-[80px]  rounded p-3 text-center flex items-center hover:shadow-sm hover:shadow-main ">
                 
                    <h3 className="text-main mx-auto ">{category.name}</h3>
                  
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "No available SubCategories"
      )}
    </div>
  );
}

export default SubCategories;

import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { MutatingDots } from 'react-loader-spinner'

function Brands() {

    async function getBrands() {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    }

    const {data ,isLoading} = useQuery("brands" , getBrands)
    
    return (
    <div>
        {isLoading?<div className="flex justify-center items-center h-screen">
                
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
              
                    </div>:<div className="w-[80%] mx-auto pt-5 text-center">
      <h1 className="text-main text-3xl font-semibold">Brands</h1>
      <div className="flex flex-wrap items-center">
        {data?.data.data.map((brand , idx)=>{
            return(<div key={idx} className="item w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 my-5 hover:cursor-pointer hover:scale-110 transition duration-500">
        <div className="bg-second   rounded p-3 text-center hover:shadow-sm hover:shadow-main">
          <div className="">

            <img
              src={brand.image}
              alt="brand image"
              className="w-full rounded h-40 "
            />

            <h3 className="text-main mx-auto ">{brand.name}</h3>
          </div>
        </div>
      </div>)
        })}
      
      </div>
    </div>}
       
    </div>
  )
}

export default Brands

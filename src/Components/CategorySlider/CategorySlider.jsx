import React from "react";
import Slider from "react-slick";
import { useQuery } from "react-query";
import axios from "axios";



export default function CategorySlider() {

    const {data} = useQuery("categories" , getAllCategories)

    async function getAllCategories()
    {
        return await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    }
   
    
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000
  };
  return (

    <section className="px-10 mt-5 w-[95%] mx-auto">
        <h1 className="text-2xl font-semibold mb-3">Popular Categories</h1>
        <div className="flex justify-center items-center">
        <div className="w-full">
        <Slider {...settings} className="">
       
        
      {data?.data.data.map(function(item , idx){
        return (<div key={idx} className="text-center"><img src={item.image} alt="" className="w-full h-[150px]"/>
            <h4 className="text-sm text-main">{item.name}</h4>
            </div>
        )
      })}
    </Slider>
    </div>
    
        </div>
    </section>
   
  );
}
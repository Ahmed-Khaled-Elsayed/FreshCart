import React from "react";
import Slider from "react-slick";
import img1 from "./../../assets/images/slider-image-1.jpeg"
import img2 from "./../../assets/images/slider-image-2.jpeg"
import img3 from "./../../assets/images/slider-image-3.jpeg"
import img4 from "./../../assets/images/blog-img-1.jpeg"
import img5 from "./../../assets/images/blog-img-2.jpeg"


export default function HomeSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000
  };
  return (

    <section className="px-10 mt-3 w-[95%] mx-auto">
        <div className="flex justify-center items-center">
        <div className="w-2/3">
        <Slider {...settings} className="">
       
        <img src={img1} alt="" className="w-full h-[280px] sm:h-[360px]"/>
        <img src={img2} alt="" className="w-full h-[280px] sm:h-[360px]" />
        <img src={img3} alt="" className="w-full h-[280px] sm:h-[360px]" />
      
    </Slider>
    </div>
    <div className="w-1/3">
    <img src={img4} alt="" className="w-full h-[140px] sm:h-[180px]" />
    <img src={img5} alt="" className="w-full h-[140px] sm:h-[180px]"/>
    </div>
        </div>
    </section>
   
  );
}
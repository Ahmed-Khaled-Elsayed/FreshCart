import React from 'react'
import paypal from './../../assets/images/paypal.png'
import amazonepay from './../../assets/images/amazonepay.png'
import american_express from './../../assets/images/american_express.png'
import appstore from './../../assets/images/appstore.png'
import mastercard from './../../assets/images/mastercard.png'
import googleplay from './../../assets/images/googleplay.png'


function Footer() {
  return (
    
    <footer className="bg-second w-full p-4 sm:p-8">
  <div className="container mx-auto">
    <div>
      <h2 className="text-2xl text-[#212529]">Get the FreshCart app</h2>
      <p className="text-xl text-[#6D767E] font-light">
        We will send you a link, open it on your phone to download the app.
      </p>
    </div>

    
    <div className="flex flex-col sm:flex-row items-center mt-5 px-4 sm:px-7 gap-3">
      <input
        type="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full sm:w-[78%] px-3 py-3"
        placeholder="Email .."
      />
      <button className="bg-main rounded w-full sm:w-[15%] text-white text-sm py-2 sm:py-3">
        Share App Link
      </button>
    </div>

    
    <div className="flex flex-col sm:flex-row justify-between mt-5 mx-4 sm:mx-8 px-4 sm:px-6 border-t border-b p-3 gap-4">
      
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <span className="text-sm font-medium text-[#212529]">Payment Partners</span>
        <div className="flex gap-3">
          <img src={paypal} alt="paypal" className="w-[50px] h-[20px]" />
          <img src={amazonepay} alt="amazone" className="w-[50px] h-[20px]" />
          <img src={american_express} alt="american_express" className="w-[50px] h-[20px]" />
          <img src={mastercard} alt="mastercard" className="w-[50px] h-[20px]" />
        </div>
      </div>

      
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <span className="text-sm font-medium text-[#212529]">Get Deliveries With FreshCart</span>
        <div className="flex gap-3">
          <img src={appstore} alt="appstore" className="w-[80px] h-[30px] rounded" />
          <img src={googleplay} alt="googleplay" className="w-[80px] h-[30px] rounded" />
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer

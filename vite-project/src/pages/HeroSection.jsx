import React from 'react'
import heroImg1 from "../assets/New folder/heroImg1.png"
import heroImg2 from "../assets/New folder/heroImg2.png"
import heroImg3 from "../assets/New folder/before.png"
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
      <section className="relative bg-gray-50 pt-16 px-6 overflow-hidden w-full min-h-[585px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6 w-[110%]">
          <div className="flex items-center space-x-2 text-yellow-500">
            <i className="fas fa-star"></i>
            <span className="text-sm font-medium text-black">Google Rating</span>
            <span className="text-sm font-bold">★★★★★</span>
          </div>
          <h1 className="text-5xl font-medium text-gray-800 max-[425px]:text-4xl">
            Your trusted partner <br /> for compliance business needs
          </h1>
          <span className='w-10 h-1 bg-[#F60014]'></span>
          <p className="text-xl text-gray-600">
            An online business compliance platform helping entrepreneurs and
            other individuals with various <span className='font-semibold'>registrations, tax filings</span>, and
            other <span className='font-semibold'>legal matters</span>.
          </p>
          
          <div className="flex space-x-6 pt-4">
            <div className="text-center">
              <span className="text-[22px] font-extrabold textcolor">4.5+</span>
              <p className="text-sm text-gray-600">Customer Rating</p>
            </div>
            <div className="text-center">
              <span className="text-[22px] font-extrabold textcolor">20,000+</span>
              <p className="text-sm text-gray-600">Clients</p>
            </div>
            <div className="text-center">
              <span className="text-[22px] font-extrabold textcolor">99.8%</span>
              <p className="text-sm text-gray-600">Financial Stability</p>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="bg-[#1C4670] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
              Talk An Expert
            </button>
            <button className="flex items-center space-x-2 ">
              <span className='bg-[#FB432C] rounded-full p-2'><FaPlay className='text-white relative left-[10%] w-2 h-2'/></span>
              <span className="font-semibold text-[16px] text-[black]">See how it works</span>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <img
            src={heroImg1}
            alt="Business Illustration"
            className="w-[600px] h-auto absolute -bottom-28 left-5 hidden lg:block"
          />
          <img src={heroImg2} alt="" 
          className='w-[229px] absolute -bottom-28 -right-10 hidden lg:block'/>
          <div>
            <ul className='absolute -top-56 lg:top-4 -right-12 flex flex-col gap-7 max-[768px]:hidden'>
              <li className=' bg-white font-medium text-sm shadow-md rounded-lg px-4 py-4 text-gray-800'>Annual Compliance</li>
              <li className=' bg-white font-medium text-sm shadow-md rounded-lg px-4 py-4 text-gray-800'>Payroll Services</li>
              <li className=' bg-white font-medium text-sm shadow-md rounded-lg px-4 py-4 text-gray-800'>Company Formation</li>
              <li className=' bg-white font-medium text-sm shadow-md rounded-lg px-4 py-4 text-gray-800'>Annual Compliance</li>
            </ul>
          </div> 
        </div>
        <img src={heroImg3} alt=""  className='w-full h-full absolute bottom-0 right-20'/>
      </div>
    </section>
    </div>
  )
}

export default HeroSection

import React from 'react';
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from 'react-icons/fa'; 
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#011B5B] text-white py-16 max-[425px]:px-4 px-24 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        

        <div className="flex flex-col md:flex-row  space-x-8 md:space-x-16">
          <div className='md:w-1/5'>
            <p className="text-[16px] text-[#AAB5CD]">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex mt-4">
              <FaFacebook className="text-xl mx-2" />
              <FaGoogle className="text-xl mx-2" />
              <FaApple className="text-xl mx-2" />
              <FaInstagram className="text-xl mx-2" />
            </div>
          </div>

          <div>
            <h4 className="text-[16px] text-[#FFA229] font-bold mb-4 tracking-[-1%]">START A BUSINESS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Solutions</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Integrations</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Enterprise</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] text-[#FFA229] font-bold mb-4 tracking-[-1%]">GOVERNMENT REGISTRATION</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Partners</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Community</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Developers</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">App</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] text-[#FFA229] font-bold mb-4 tracking-[-1%]">COMPLIANCE & TAX</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Channels</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Scale</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Watch the Demo</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Our Competition</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] text-[#FFA229] font-bold mb-4 tracking-[-1%]">BIS & CDSCO</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">News</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Leadership</a></li>
              <li><a href="#" className="hover:text-orange-500 text-[#AAB5CD]">Media Kit</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className='flex justify-center mt-8'>
          <button className="bg-[#FFA229] hover:bg-orange-600 text-white p-3 rounded-full">
            <FaArrowUp />
          </button>
        </div>
      <p className="text-center text-sm mt-8 text-[#AAB5CD]">
        &copy; 2024 Registerkaro. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
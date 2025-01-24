import React from 'react'
import { FaFacebook,FaTwitter,FaPinterest,FaAngleDown } from "react-icons/fa";
import { FaInstagram,FaPhoneFlip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import logo1 from '../assets/New folder/logo1.png';
import logo from '../assets/New folder/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1C4670] text-white relative">
      <div className="container mx-auto flex justify-end items-center py-2 gap-4 w-[90%]">
        {/* Top Info Section */}
        <div className="flex items-center space-x-4 text-sm ">
          <a href="mailto:info@registerkaro.in" className="flex items-center justify-center gap-1">
          <IoMdMail />
            www.registerkaro.in
          </a>
          <a href="tel:+919876543210" className="flex items-center justify-center gap-1">
          <FaPhoneFlip />
            +918447746183
          </a>
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 max-[375px]:hidden">
          <a href="#" className="hover:text-yellow-400">
          <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-400">
          <FaFacebook />
          </a>
          <a href="#" className="hover:text-yellow-400">
          <FaTwitter />
          </a>
          <a href="#" className="hover:text-yellow-400">
          <FaPinterest />
          </a>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-white shadow h-[70px]">
        <div className="container mx-auto flex justify-between items-center w-[90%] py-4 relative">
          {/* Logo */}
          <div className="flex items-center space-x-2 relative">
            
            <img src={logo} alt="logo" className='h-[34px] absolute -top-3 -left-2'/>
            <img src={logo1} alt="logo1" className='h-[36.8px]' />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex flex-wrap items-center space-x-6">
            <a href="/" className="text-gray-800 text-[16px] font-semibold hover:text-[#1C4670]">
              Home
            </a>
            <div className="relative group">
              <a
                href="#"
                className="text-gray-800 hover:text-[#1C4670] font-semibold flex items-center"
              >
                Our Services <FaAngleDown />
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 w-48">
                <a
                  href="/services/service1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="/services/service2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </a>
              </div>
            </div>
            <a href="/blog" className="text-gray-800 text-[16px] font-semibold hover:text-[#1C4670]">
              Blog
            </a>
            <a href="/contact" className="text-gray-800 text-[16px] font-semibold hover:text-[#1C4670]">
              Contact Us
            </a>
            <a href="/about" className="text-gray-800 text-[16px] font-semibold hover:text-[#1C4670]">
              About Us
            </a>
            <a href="#" className="text-gray-800 text-[26px] font-semibold hover:text-[#1C4670]">
            <CiSearch />
            </a>
          </nav>

          {/* Call to Action */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#FFA229] text-white px-4 py-2 font-semibold text-[16px] rounded hover:bg-orange-600 max-[769px]:hidden">
              Talk An Expert
            </button>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden relative">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={handleOpenMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2} 
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            {isOpen && (
              <div className="absolute right-0 top-5 shadow-md w-48 mt-2 z-30">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 bg-[#FFA229] text-black font-semibold border-b-2 border-gray-200 rounded">
                    <a href="/">Home</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 bg-[#FFA229] text-black font-semibold border-b-2 border-gray-200 rounded">
                    <a href="#">Our Services</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 bg-[#FFA229] text-black font-semibold border-b-2 border-gray-200 rounded">
                    <a href="#">Blog</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 bg-[#FFA229] text-black font-semibold border-b-2 border-gray-200 rounded">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 bg-[#FFA229] text-black font-semibold border-b-2 border-gray-200 rounded">
                    <a href="#">About Us</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 bg-[#FFA229] text-black font-semibold border-b-2 border-gray-200 rounded">
                    <a href="#">Search</a>
                  </li>
                </ul>
                
                
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

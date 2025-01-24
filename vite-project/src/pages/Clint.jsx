import React from 'react';
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from 'react-icons/fa'; 
import img1 from "../assets/New folder/clients/img1.png"
import img2 from "../assets/New folder/clients/img2.png"
import img3 from "../assets/New folder/clients/img3.png"
import img4 from "../assets/New folder/clients/img4.png"
import img5 from "../assets/New folder/clients/img5.png"
import img6 from "../assets/New folder/clients/img6.png"
import img7 from "../assets/New folder/clients/img7.png"
import img8 from "../assets/New folder/clients/img8.png"
import img9 from "../assets/New folder/clients/img9.png"
import img10 from "../assets/New folder/clients/img10.png"
import img11 from "../assets/New folder/clients/img11.png"
import img12 from "../assets/New folder/clients/img12.png"
import img13 from "../assets/New folder/clients/img13.png"
import img14 from "../assets/New folder/clients/img14.png"
import img15 from "../assets/New folder/clients/img15.png"
import img16 from "../assets/New folder/clients/img16.png"
import img17 from "../assets/New folder/clients/img17.png"
import img18 from "../assets/New folder/clients/img18.png"
import img19 from "../assets/New folder/clients/img19.png"
import img20 from "../assets/New folder/clients/img20.png"
import img21 from "../assets/New folder/clients/img21.png"
import img22 from "../assets/New folder/clients/img22.png"
import img23 from "../assets/New folder/clients/img23.png"

const Client = () => {

  return (
    <div className="relative overflow-hidden bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold">Our Happy Clients</h2>
        <p className="text-gray-500 mt-2 mb-6">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state-of-the-art customer service.
        </p>
      </div>
      <div className="relative flex overflow-hidden items-center h-[407px]">
        <div className="flex w-full animate-scroll flex-wrap justify-center items-center gap-6 relative">
          <img src={img1} alt="client" className="h-16 w-18 p-2 border-2 rounded-full relative left-9" />
          <img src={img2} alt="client" className="h-36 p-2 border-2 rounded-full absolute -top-40 left-14" />
          <img src={img3} alt="client" className="h-20 p-2 border-2 rounded-full absolute -bottom-0 left-0" />
          <img src={img4} alt="client" className="h-24 p-2 border-2 rounded-full absolute -bottom-16 left-32"/>
          <img src={img5} alt="client" className="h-20 p-2 border-2 rounded-full absolute -top-20 left-56" />
          <img src={img6} alt="client" className="h-36 p-2 border-2 rounded-full absolute -bottom-24 left-72" />
          <img src={img7} alt="client" className="h-10 p-2 border-2 rounded-full absolute -top-28 left-[360px]" />
          <img src={img8} alt="client" className="h-28 p-2 border-2 rounded-full absolute -top-12 left-[460px]"/>
          <img src={img9} alt="client" className="h-20 p-2 border-2 rounded-full absolute top-28 left-[560px]"/>
          <img src={img10} alt="client" className="h-20 p-2 border-2 rounded-full absolute bottom-28" />
          <img src={img11} alt="client" className="h-10 p-2 border-2 rounded-full absolute top-48 left-[460px]" />
          <img src={img12} alt="client" className="h-28 p-2 border-2 rounded-full absolute right-0 top-24" />
          <img src={img13} alt="client" className="h-20 p-2 border-2 rounded-full absolute right-20 bottom-3" />
          <img src={img14} alt="client" className="h-32 p-2 border-2 rounded-full absolute right-44 bottom-20" />
          <img src={img15} alt="client" className="h-24 p-2 border-2 rounded-full absolute right-56 top-20" />
          <img src={img16} alt="client" className="h-12 p-2 border-2 rounded-full absolute right-0 bottom-28" />
          <img src={img17} alt="client" className="h-18 p-2 border-2 rounded-full absolute right-[340px]" />
          <img src={img18} alt="client" className="h-32 p-2 border-2 rounded-full absolute right-[450px] top-24" />
          <img src={img19} alt="client" className="h-28 p-2 border-2 rounded-full absolute right-[430px] bottom-28" />
          <img src={img20} alt="client" className="h-20 p-2 border-2 rounded-full absolute left-[480px] bottom-40"/>
          <img src={img21} alt="client" className="h-10 p-2 border-2 rounded-full absolute right-[500px]" />
          {/* <img src={img22} alt="client" className="h-20 p-2 border-2 rounded-full absolute" /> */}
          <img src={img23} alt="client" className="h-20 p-2 border-2 rounded-full absolute left-10 top-36"/>
          

        </div>
        
        
      </div>
    </div>
  );
};

export default Client;
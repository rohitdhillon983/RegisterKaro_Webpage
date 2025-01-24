import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import img1 from '../assets/New folder/services/img1.png';
import img2 from '../assets/New folder/services/img2.png';
import img3 from '../assets/New folder/services/img3.png';
import img4 from '../assets/New folder/services/img4.png';
import img5 from '../assets/New folder/services/img5.png';
import img6 from '../assets/New folder/services/img6.png';

const Services = () => {
    const services = [
        {
          title: 'Company Formation',
          description: 'Build web-based solutions that enhance customer experience.',
          icon: <img src={img1} alt="Company Formation" />,
          
        },
        {
          title: 'Company Secretarial Services',
          description: 'Make data-driven decisions and utilize technology to reach business goals.',
          icon: <img src={img2} alt="Company Secretarial Services" />,
          
        },
        {
          title: 'Virtual Office Address',
          description: 'Foster customer relationships by effectively serving your market.',
          icon: <img src={img3} alt="Virtual Office Address" />,
         
        },
        {
          title: 'Annual Compliance Services',
          description: 'Turn your ideas into modern products with our design experts.',
          icon: <img src={img4} alt="Annual Compliance Services" />,
         
        },
        {
          title: 'Payroll Services',
          description: 'Expand your business across the globe with minimal effort.',
          icon: <img src={img5} alt="Payroll Services" />,
          
        },
        {
          title: 'Bookkeeping Services',
          description: 'Steering user behaviours with creative design, data insights & technology.',
          icon: <img src={img6} alt="Bookkeeping Services" />,
          
        },
      ];    
  return (
    <section className="container mx-auto flex flex-col items-center py-9 bg-[#F9F9F9]">
      <p className='text-[#EB8D15] text-[14px]'>WELCOME TO REGISTERKARO.IN</p>
      <h2 className="text-[32px] font-bold leading-[35.4px] tracking-[0.16px] text-center py-3">Explore Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] relative top-9 mx-auto">
        {services.map((service, index) => (
            <div className={`flex flex-col items-center justify-center p-6 border-r-2`}>
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-[20px] leading-[21.6px] tracking-[0.16px] font-extrabold mb-2">{service.title}</h3>
            <p className="text-[17.6px] leading-[26.4px] tracking-[0.16px] text-center text-[#282728] p-5">{service.description}</p>
            <button className="mt-4 text-[#001038] leading-[24px] tracking-[0.16px] hover:underline flex items-center gap-2">Learn More <div className='rounded-full border-2 border-[#001038]'><FaArrowRight /></div></button>
          </div>
        ))}
      </div>
      <button className="mt-20 block mx-auto bg-[#1C4670] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        See All Services
      </button>
    </section>
  )
}

export default Services

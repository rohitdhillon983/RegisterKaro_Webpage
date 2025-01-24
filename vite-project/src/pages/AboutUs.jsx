import React from 'react'
import img from '../assets/New folder/about.png';
import vector from '../assets/New folder/vector.png';
import shape from '../assets/New folder/shape.png';

const AboutUs = () => {
  return (
    <section className=" w-[100%] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between min-[769px]:h-[558px]">
        <div className="md:w-1/2 px-10">
          <p className='text-[#EB8D15] text-[14px]'>WELCOME TO REGISTERKARO.IN</p>
          <h2 className="text-[32px] font-bold mb-4">About <span className='text-[#EB8D15]'>Register Karo</span></h2>
          <p className="text-[16px] mb-6 leading-[26px] tracking-[0.16px] text-[#0D1216]">
            We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone's expectations.
          </p>
          <p className="text-[16px] leading-[26px] tracking-[0.16px] text-[#0D1216] mb-4">
            I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="bg-[#1C4670] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Learn More</button>
        </div>

        <div className="md:w-1/2 mb-8 md:mb-0 flex relative">
          <img src={img} alt="About Us" className="w-[579px] z-10 rounded-md shadow-[-1px_2px_2px_2px_#EB8D15]" />
          <img src={vector} alt="" className='absolute -top-40 -right-16 z-10 w-[111px] h-[750px] hidden min-[769px]:block'/>
          <img src={shape} alt="" className='absolute bottom-0 right-3 z-0 hidden min-[769px]:block'/>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

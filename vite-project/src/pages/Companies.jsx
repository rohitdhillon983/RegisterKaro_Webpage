import React from 'react'
import img1 from "../assets/New folder/company/Companylogo.png"
import img2 from "../assets/New folder/company/Companylogo-1.png"
import img3 from "../assets/New folder/company/Companylogo-2.png"
import img4 from "../assets/New folder/company/Companylogo-3.png"
import img5 from "../assets/New folder/company/Companylogo-4.png"
import img6 from "../assets/New folder/company/Companylogo-5.png"


const Companies = () => {
  return (
    <div className='bg-white flex justify-center items-center py-16'>
      <div className='flex justify-center items-center gap-14 flex-wrap'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
    </div>
  )
}

export default Companies

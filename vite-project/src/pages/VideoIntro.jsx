import React from 'react'
import icon from '../assets/New folder/icon.png'
import icon1 from '../assets/New folder/icon-1.png'
import videoIntro from '../assets/New folder/videoIntro.png'
import videoIntro2 from '../assets/New folder/videoIntro2.png'

const VideoIntro = () => {
  return (
    <div className="bg-[#1C4670] text-white px-1 md:px-12 py-10 md:py-10">
      <div className="max-w-6xl grid md:grid-cols-2 items-center gap-20">
        {/* Text Section */}
        <div>
          <h2 className="text-[24px] md:text-[34px] font-bold mb-4 leading-[40px] tracking-[-1.5%]">
            Our Video Introductions
          </h2>
          <p className="text-[#AAB5CD] text-[16px] leading-6 tracking-[-1%] mb-8">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#FFA229] text-white p-[12px] rounded-full">
                <img src={icon} alt="" className='w-[32px]'/>
              </div>
              <div>
                <h3 className="text-[22px] font-bold">Explore ideas together</h3>
                <p className="text-[#AAB5CD] text-[16px] leading-6 tracking-[-1%]">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#FFA229] text-white p-[12px] rounded-full">
                <img src={icon1} alt="" className='w-[32px]'/>
              </div>
              <div>
                <h3 className="text-[22px] font-bold">Bring those ideas to life</h3>
                <p className="text-[#AAB5CD] text-[16px] leading-6 tracking-[-1%]">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full min-[1025px]:w-[640px] ">
          <img
            src={videoIntro}
            alt="Video Thumbnail"
            className="rounded-lg shadow-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className=" rounded-lg overflow-hidden">
              <img src={videoIntro2} alt="" className='w-full'/>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoIntro

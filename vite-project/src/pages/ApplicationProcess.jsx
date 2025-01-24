import React from 'react';
import document from '../assets/New folder/ApplicationProcess/document.png';
import creditCard from '../assets/New folder/ApplicationProcess/creaditCard.png';
import userGear from '../assets/New folder/ApplicationProcess/userGear.png';
import mail from '../assets/New folder/ApplicationProcess/mail.png';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: document,
      title: 'Fill up Application Form',
      color: '#EB5757',
    },
    {
      icon: creditCard,
      title: 'Make Online Payment',
      color: '#27AE60',
    },
    {
      icon: userGear,
      title: 'Executive will Process Application',
      color: '#F2994A',
    },
    {
      icon: mail,
      title: 'Get Confirm Mail',
      color: '#828282',
    },
  ];
  // console.log(steps);
  return (
    <section className="bg-[#FFA229] py-8">
      <div className="container mx-auto flex justify-center items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex gap-4 items-center justify-center w-1/4 ${
              index > 0 && ' border-gray-200 pl-6'
            }`}
          >
            <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center mb-2 max-[425px]:hidden`} style={{backgroundColor: step.color}}>
              <img src={step.icon} alt="" className='w-[24px]'/>
            </div>
            <p className="text-lg font-semibold text-center max-[769px]:text-sm">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationProcess;
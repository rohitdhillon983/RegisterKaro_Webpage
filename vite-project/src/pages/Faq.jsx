import React from 'react';
import { FaAngleRight,FaArrowRight } from "react-icons/fa";
import "../App.css";

const Faq = () => {
  const faqs = [
    {
      question: "Can I recover deleted files from desktop with this software?",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
    }
]
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <p className="text-[14px] leading-9 tracking-[0.16px] font-bold text-center text-[#EB8D15]">FAQ</p>
      <h2 className="text-[32px] leading-9 tracking-[0.16px] font-bold text-center mb-8">
        Frequent Ask Questions
      </h2>
      <div className="flex flex-col gap-4 w-full">
        {faqs.map((faq, index) =>
            
        <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] shadowRight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-800">
              {faq.question}
            </h3>
            <FaAngleRight />
          </div>
        </div>
      )}
      </div>
      <button className="bg-[#1C4670] hover:bg-blue-600 text-white mt-10 font-semibold py-2 px-4 rounded flex items-center gap-2">Learn More <FaArrowRight /></button>
    </div>
  );
};

export default Faq;
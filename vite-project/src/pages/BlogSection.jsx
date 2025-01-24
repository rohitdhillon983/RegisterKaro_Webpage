import React from 'react';
import { FaAngleRight,FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import img from "../assets/New folder/blogs/Image.png";
import img1 from "../assets/New folder/blogs/Image-1.png";
import img2 from "../assets/New folder/blogs/Image-2.png";
import img3 from "../assets/New folder/blogs/Image-3.png";
import img4 from "../assets/New folder/blogs/Image-4.png";
import img5 from "../assets/New folder/blogs/Image-5.png";

const BlogSection = () => {
  const blogs = [
    { 
      img: img,
      title: 'Small business & Startup',
      author: 'Prabhash Mishra',
      date: '1 Jan 2023',
      category: ["Tax & Audit", "Management"],
      description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    },
    { 
      img: img1,
      title: 'Scale-Up Company Offer',
      author: 'Mahesh Kumar',
      date: '1 Jan 2023',
      category: ["Tax","Research","Compliance"],
      description: 'Mental models are simple expressions of complex processes or relationships.',
    },
    {
      img: img2,
      title: 'Growing Business Package',
      author: 'Rakhi Verma',
      date: '1 Jan 2023',
      category: ["Audit","Money Back"],
      description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    },
    {
      img: img3,
      title: 'Scale-Up Company Offer',
      author: 'Karan Kumar',
      date: '1 Jan 2023',
      category: ["Money","Management"],
      description: 'Collaboration can make our teams stronger, and our individual designs better.',
    },
    {
      img: img4,
      title: 'Scale-Up Company Offer',
      author: 'Richa Singh',
      date: '1 Jan 2023',
      category: ["Tax Return","News","Audit"],
      description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    },
    {
      img: img5,
      title: 'Scale-Up Company Offer',
      author: 'Miss Nora',
      date: '1 Jan 2023',
      category: ["Private Limited Company","Customer Support"],
      description: 'Starting a community doesn\'t need to be complicated, but how do you get started?',
    },
    // Add more blog posts here
  ];

  return (
    <section className="container mx-auto py-16 overflow-hidden">
      <h2 className="text-[14px] leading-9 tracking-[0.16px] font-bold text-center text-[#EB8D15]">Explore Our Blogs</h2>
      <h3 className="text-[32px] leading-9 tracking-[0.16px] font-bold text-center mb-12 max-[769px]:text-[24px]">Accelerate Digital Transformation</h3>
      <div className="flex flex-wrap gap-8 px-8">
        {blogs.map((blog) => (
          <div className="bg-white rounded-lg w-[384px] max-[769px]:w-[200px] max-[425px]:w-[150px] " key={blog.title}>
            <img src={blog.img} className="w-full mb-6" alt="" />
            <p className="text-sm text-gray-500 leading-5 font-medium">
              {blog.author} * {blog.date} 
            </p>
            <h4 className="text-[22px] font-bold leading-9 flex items-center justify-between max-[425px]:text-[16px] max-[425px]:leading-6">{blog.title} <FiArrowUpRight /></h4>
            
            <p className="text-sm leading-6 text-[#667085]">{blog.description}</p>
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {blog.category.map((category, index) => (
                <div className="bg-[#e1ebf57e] rounded-full px-2 text-[#6941C6] text-sm font-medium" key={index}>
                  {category}
                </div>  
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center flex justify-center mt-8">
        <button className="bg-[#1C4670] hover:bg-blue-600 text-white mt-10 font-semibold py-2 px-4 rounded flex items-center gap-2">show more blogs <FaArrowRight /></button>
      </div>
    </section>
  );
};

export default BlogSection;
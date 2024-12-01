import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ManImg from "../../assets/manImg.png";
import { FaCopy, FaPaste, FaRocket } from "react-icons/fa"; // Example icons

const CardSection = () => {
  return (
    <div className="h-screen bg-slate-950 shadow-md p-8">
      {/* Container with Flexbox for two-column layout */}
      <div className="flex flex-row lg:flex-row gap-8">
        <div className="space-y-2">
          <div className="flex items-center space-x-4 text-white">
            <FaCopy size={30} className="text-pink-400" />
            <span className="font-semibold text-xl text-white">Copy</span>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <FaPaste size={30} className="text-blue-400" />
            <span className="font-semibold text-xl text-white">Paste</span>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <FaRocket size={30} className="text-green-400" />
            <span className="font-semibold text-xl text-white">Launch</span>
          </div>
        </div>

        {/* Right column (Images) */}
        <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            id="img-1"
            className="relative  card-image bg-slate-100 p-4 rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              className="w-full h-auto rounded-lg group-hover:scale-105 transition-all duration-300"
              src="http://res.cloudinary.com/dakddv1pm/image/upload/v1732187483/posts/gkic1e4e4urfemnutp4a.png"
              alt="Image 1"
            />
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-900 cursor-pointer  hover:transition-all hover:duration-100  to-blue-900 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>

          <div className="relative bg-white p-4 rounded-lg shadow-lg overflow-hidden group">
            <img
              className="w-full animate-pulse h-auto rounded-lg   group-hover:scale-105 transition-all duration-300"
              src="http://res.cloudinary.com/dakddv1pm/image/upload/v1732187458/posts/lthcz7aprnvldihburzi.png"
              alt="Image 2"
            />
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  from-slate-900 cursor-pointer  hover:transition-all hover:duration-100  to-blue-900 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

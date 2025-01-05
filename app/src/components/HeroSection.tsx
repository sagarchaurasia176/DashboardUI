import React, { useRef, useEffect } from "react";
import { subHeader } from "../apis/HeroData";
import { Link, NavLink } from "react-router-dom";

const HeroSection = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paraRef = useRef(null);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-slate-950">
      <div className="inset-0 sm:p-12">
        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center"
        >
          {subHeader.decp}
        </h1>

        {/* Subheading */}
        <h2
          ref={subHeadingRef}
          className="text-3xl lg:text-6rem sm:text-6xl text-center  font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-green-500 py-3"
        >
          {subHeader.next}
        </h2>

        {/* Paragraph */}
        <p
          id="texts-typer"
          ref={paraRef}
          className=" text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500  font-medium text-center text-xl sm:text-2xl mt-4"
        >
          {subHeader.para}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 justify-center mt-6">
        {/* Browse Components Button */}
       
           <NavLink to='/installation'>
          <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Browse Components
           
          </button>
           </NavLink>

        {/* Custom Components Button */}
        <Link to="/installation">
          <button className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-teal-700 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h11M9 21V3m3 18l-3-3m0 0L6 18m3 3v-6"
              />
            </svg>
            Custom Components
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

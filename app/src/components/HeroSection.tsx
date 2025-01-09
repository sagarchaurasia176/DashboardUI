import React, { useRef } from "react";
import { subHeader } from "../apis/HeroData";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const HeroSection = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paraRef = useRef(null);

  return (
    <>
      <Navbar />

      <section className="h-[70vh]  flex flex-col justify-center items-center bg-slate-950 px-4">
        {/* Content Container */}
        <div className="p-6 sm:p-12 w-full rounded-lg shadow-xl">
          {/* Main Heading */}
          <h1
            ref={headingRef}
            className="    text-6xl lg:text-9xl md:text-5xl   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center"
          >
            {subHeader.decp}
          </h1>

          {/* Subheading */}
          <h2
            ref={subHeadingRef}
            className="  text-6xl lg:text-9xl md:text-5xl  font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-green-500 py-3 mt-4"
          >
            {subHeader.next}
          </h2>

          {/* Paragraph */}
          <p
            ref={paraRef}
            className="text-base sm:text-lg font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 mt-4 leading-relaxed"
          >
            {subHeader.para}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center mt-8 space-y-4 sm:space-y-0">
          {/* Browse Components Button */}
          <NavLink to="/installation">
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              aria-label="Browse Components"
            >
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
          <NavLink to="/installation">
            <button
              className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-teal-700 transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
              aria-label="Custom Components"
            >
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
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

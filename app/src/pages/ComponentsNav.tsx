import { HeaderComponents } from "../apis/HeroData";
import React from "react";
import { Link } from "react-router-dom";

const ComponentsNav = () => {
  return (
    <div className="bg-slate-950 sm-full lg:w-full text-white p-8 lg:p-8">
      <ul className=" hidden lg:flex sm:text-xs lg:text-sm sm:space-x-1 lg:space-x-4 sm:gap-3 lg:gap-12 justify-center items-center">
        {HeaderComponents.map((Val) => (
          <Link
            to={Val.link}
            key={Val.title}
            className="hover:text-gray-100 text-sm lg:text-2xl font-semibold flex items-center gap-2"
          >
            {Val.icon}
            <span className="text-sm lg:text-xl">{Val.title}</span>
          </Link>
        ))}
        <button
          aria-label="Book Demo"
          className="hidden lg:flex lg:justify-end lg:items-center bg-transparent bg-yellow-50 text-black p-4 rounded-xl font-semibold transition-all"
          onClick={() => (window.location.href = "https://cal.com/DashboardUi")}
        >
          Book Demo
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </ul>
    </div>
  );
};

export default ComponentsNav;

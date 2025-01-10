import { HeaderComponents } from "../apis/HeroData";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
import { FaBars, FaHome } from "react-icons/fa";
const ComponentsNav = () => {
  const { isCollapsed, toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="bg-slate-800 flex justify-between items-center text-white z-50 sticky top-0 p-3">
      <button 
        onClick={toggleSidebar}
        className="flex items-center justify-center w-10 h-10 rounded-lg 
          hover:bg-slate-700 transition-colors duration-200"
        aria-label="Toggle Sidebar"
      >
        <FaBars className="text-xl" />
      </button>

      <ul className="flex items-center space-x-2 md:space-x-4">
        <Link
          to="/"
          className="hover:text-gray-300 font-semibold flex items-center gap-2 p-2 
            rounded-lg hover:bg-slate-700 transition-colors duration-200"
        >
          <div className="flex flex-row items-center gap-2">
            <FaHome className="text-lg" />
            <span className="hidden md:block text-sm md:text-base">
              Home
            </span>
          </div>
       
        </Link>
        {HeaderComponents.map((Val) => (
          <Link
            to={Val.link}
            key={Val.title}
            className="hover:text-gray-300 font-semibold flex items-center gap-2 p-2 
              rounded-lg hover:bg-slate-700 transition-colors duration-200"
          >
            <span className="text-lg md:text-xl">{Val.icon}</span>
            <span className="hidden md:block text-sm md:text-base">
              {Val.title}
            </span>
          </Link>
        ))}
        <button
          aria-label="Book Demo"
          className="hidden md:flex items-center bg-orange-500 hover:bg-orange-600 
            text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
          onClick={() => (window.location.href = "https://cal.com/DashboardUi")}
        >
          Book Demo
        </button>
      </ul>
    </div>
  );
};

export default ComponentsNav;

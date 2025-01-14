import { HeaderComponents } from "../apis/HeroData";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
import { FaBars, FaHome } from "react-icons/fa";

const ComponentsNav = () => {
  const { isCollapsed, toggleSidebar } = useContext(SidebarContext);

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-indigo-800 flex justify-between items-center text-white z-50 sticky top-0 p-2 lg:p-5 md:lg-p-5 sm:p-5 shadow-lg">
      <button
        onClick={toggleSidebar}
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg 
          hover:bg-purple-700 transition-transform transform duration-200
          ${!isCollapsed ? "bg-purple-700" : ""}`}
        aria-label="Toggle Sidebar"
      >
        <FaBars className="text-lg sm:text-xl" />
      </button>

      <ul className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
        <Link
          to="/"
          className="hover:text-gray-300  font-semibold flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 
            rounded-lg hover:bg-purple-700 transition-transform transform duration-200"
        >
          <div className="flex flex-row items-center gap-1 sm:gap-2">
            <FaHome className="text-base hidden md:block lg:block sm:text-lg" />
            <span className="hidden md:block text-xs sm:text-sm md:text-base">
              Home
            </span>
          </div>
        </Link>
        {HeaderComponents.map((Val) => (
          <Link
            to={Val.link}
            key={Val.title}
            className="hover:text-gray-300 font-semibold flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 
              rounded-lg hover:bg-purple-700 transition-transform transform duration-200"
          >
            <span className="text-base hidden md:block lg:block md:text-xl">{Val.icon}</span>
            <span className="hidden md:block sm:text-sm md:text-base">
              {Val.title}
            </span>
          </Link>
        ))}
        <button
          aria-label="Book Demo"
          className="hidden md:flex items-center bg-orange-500 hover:bg-orange-600 
            text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-sm md:text-base transition-transform transform duration-200"
          onClick={() => (window.location.href = "https://cal.com/DashboardUi")}
        >
          Book Demo
        </button>
      </ul>
    </nav>
  );
};

export default ComponentsNav;

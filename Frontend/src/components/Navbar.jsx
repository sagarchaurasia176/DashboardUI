import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HeaderComponents, mainHeader } from "../apis/HeroData";

const Navbar = () => {
  return (
    <div>
      <div className=" text-center font-bold  text-white  bg-gradient-to-br from-pink-700 via-pink-500 to-violet-500 p-2">
        {mainHeader.bio}
      </div>
      <header className="text-gray-100 body-font w-full bg-slate-800   transition-all ">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font  items-center text-gray-100  font-bold mb-4 md:mb-0"
          >
            <img className="  w-6" src={logo} alt="" />
            <span className="ml-3 text-xl">Dashboard_UI</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {HeaderComponents.map((values) => (
              <>
                <Link className="mr-5 hover:text-red-200 hover:animate-pulse hover:transition-all">
                  {values.title}
                </Link>
              </>
            ))}
          </nav>
          <button className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 rounded text-base mt-4 md:mt-0">
            Book Demo
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

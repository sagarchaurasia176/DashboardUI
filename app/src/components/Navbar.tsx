import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { HeaderComponents } from "../apis/HeroData";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full fixed   bg-slate-900 text-gray-100  z-50 ">
      <div className="absolute w-full  border-b-2 border-white   container mx-auto flex items-center justify-between p-3">
        {/* Logo */}
        <Link to="/" className="flex items-center font-bold text-xl">
          <img className="w-8 h-8" src={logo} alt="Logo of Dashboard_UI" />
          <span className="ml-2">Dashboard_UI</span>
        </Link>

        {/* Menu for larger screens */}
        <nav className="hidden md:flex space-x-6">
          {HeaderComponents.map((item, index) => (
            <Link
              key={index}
              to={item.link || "#"}
              className={`hover:text-red-200 hover:animate-pulse transition-all ${
                location.pathname === item.link ? "text-red-500 font-bold" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Demo Button */}
        <button
          aria-label="Book Demo"
          className="hidden md:inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
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

        {/* Hamburger Menu */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          className="md:hidden text-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-800 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-2 p-4">
          {HeaderComponents.map((item, index) => (
            <Link
              key={index}
              to={item.link || "#"}
              className={`block text-gray-100 hover:text-red-200 transition-all ${
                location.pathname === item.link ? "text-red-500 font-bold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center p-4">
          <button
            aria-label="Book Demo"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
          >
            Book Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

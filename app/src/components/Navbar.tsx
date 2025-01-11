import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { HeaderComponents, subHeader } from "../apis/HeroData";
import GoogleAuth from "../auth/GoogleAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import '../styles/navbar-blur.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [userImg, setImg] = useState<string | null>(null);

  const auth = getAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setImg(user.photoURL);
      } else {
        setImg(null);
      }
    });
  }, [auth]);

  return (
    <>
       {/* Subheader */}
       <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-center p-2 lg:p-4 sm:p-2">
        <h2 className="text-md lg:text-lg md:text-md font-medium text-white animate-pulse">
          {subHeader.data}
        </h2>
      </div>
      <header className={`sticky top-0 z-50 shadow-lg w-full transition-all  p-3 lg:p-4 duration-300 ${
        isScrolled ? 'navbar-blur' : 'bg-slate-900'
      } text-gray-100`}>
        {/* Gradient border bottom */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          )}
        </AnimatePresence>

      {/* Navbar */}
      <div className="flex items-center justify-between p-1  ">
        {/* Logo */}
        <Link to="/" className="flex items-center font-bold text-sm sm:text-lg md:text-sm lg:text-1xl">
          <img className="w-8 h-8" src={logo} alt="Logo of Dashboard_UI" />
          <span className=" ml-0 lg:ml-2 sm:ml-0  font-extrabold   text-xl lg:text-2xl  ">Dashboard_UI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:flex-row lg:justify-between lg:space-x-10">
          {HeaderComponents.map((item, index) => (
            <Link
              key={index}
              to={item.link || "#"}
              className={`hover:text-red-200 hover:animate-pulse transition-all ${
                location.pathname === item.link ? "text-blue-500 font-bold" : ""
              }`}
            >
              <p className="font-semibold flex items-center justify-center lg:text-2xl sm:text-sm  md:text-md  ">
                {item.icon} &nbsp; {item.title}
              </p>
            </Link>
          ))}
        </nav>

        {/* User Info and Demo Button */}
        <div className="flex   items-center flex-row gap-12">
          {userImg ? (
            <img src={userImg} className="w-12 h-12 rounded-full" alt="User" />
          ) : (
            <GoogleAuth />
          )}
          <button
            aria-label="Book Demo"
            className="hidden md:flex  items-center rounded-xl p-4   font-bold bg-slate-400 text-black  transition-all"
            onClick={() =>
              (window.location.href = "https://cal.com/DashboardUi")
            }
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-800 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } absolute left-0 top-full w-full z-50`}
      >
        <nav className="flex flex-col gap-2 p-4">
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
          <div className="flex justify-center mt-4">
            <button
              aria-label="Book Demo"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
              onClick={() =>
                (window.location.href = "https://cal.com/DashboardUi")
              }
            >
              Book Demo
            </button>
          </div>
        </nav>
      </div>
    </header>
    </>

  );
};

export default Navbar;

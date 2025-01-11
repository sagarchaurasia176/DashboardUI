import React, { useRef } from "react";
import { motion } from "framer-motion";
import { subHeader } from "../apis/HeroData";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paraRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-[#1A2334] to-[#0A1626] overflow-hidden"
  >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[10%] left-[5%] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative p-12 sm:p-12 w-full  mx-auto text-center z-10"
        variants={containerVariants}
      >
        {/* Main Heading */}
        <motion.h1
          ref={headingRef}
          variants={itemVariants}
          className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-extrabold   text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-red-500 leading-tight font-['Poppins', sans-serif]"
        >
          {subHeader.decp}
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          ref={subHeadingRef}
          variants={itemVariants}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mt-6 font-['Roboto', serif] tracking-wide leading-tight bg-blue-900 rounded-lg p-4"
        >
          {subHeader.next}
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          ref={paraRef}
          variants={itemVariants}
          className="text-lg sm:text-xl font-medium text-center mt-6 max-w-8xl mx-auto leading-relaxed text-gray-300 font-['Courier New', monospace]"
        >
          {subHeader.para}
        </motion.p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row sm:space-x-6 justify-center mt-2 space-y-4 sm:space-y-0 z-10"
        variants={containerVariants}
      >
        {/* Browse Components Button */}
        <NavLink to="/installation">
          <motion.button
        variants={buttonVariants}
        className="flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Browse Components"
          >
        <i className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </i>
        Browse Components
          </motion.button>
        </NavLink>

        {/* Custom Components Button */}
        <NavLink to="/installation">
          <motion.button
        variants={buttonVariants}
        className="flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Custom Components"
          >
        <i className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </i>
        Custom Components
          </motion.button>
        </NavLink>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;

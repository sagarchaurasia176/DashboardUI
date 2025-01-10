import React, { useRef } from "react";
import { motion } from "framer-motion";
import { subHeader } from "../apis/HeroData";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

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
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-slate-950 via-[#070B24] to-[#0A1435] px-4 overflow-hidden"
      >
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] bg-blue-500/20 rounded-full blur-[100px]" />
        </div>

        {/* Content Container */}
        <motion.div 
          className="relative p-6 sm:p-12 w-full max-w-7xl mx-auto rounded-lg z-10"
          variants={containerVariants}
        >
          {/* Main Heading */}
          <motion.h1
            ref={headingRef}
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center leading-tight"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {subHeader.decp.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                transition={{ type: "spring", stiffness: 300 }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            ref={subHeadingRef}
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 py-3 mt-4"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {subHeader.next.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                transition={{ type: "spring", stiffness: 300 }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h2>

          {/* Enhanced paragraph styling */}
          <motion.p
            ref={paraRef}
            variants={itemVariants}
            className="text-lg sm:text-xl font-bold text-center mt-6 max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent"
          >
            {subHeader.para}
          </motion.p>
        </motion.div>

        {/* Action Buttons with enhanced styling */}
        <motion.div 
          className="relative flex flex-col sm:flex-row sm:space-x-6 justify-center mt-12 space-y-4 sm:space-y-0 z-10"
          variants={containerVariants}
        >
          {/* Browse Components Button */}
          <NavLink to="/installation">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              aria-label="Browse Components"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </motion.svg>
              Browse Components
            </motion.button>
          </NavLink>

          {/* Custom Components Button */}
          <NavLink to="/installation">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
              aria-label="Custom Components"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                whileHover={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m3 18l-3-3m0 0L6 18m3 3v-6"
                />
              </motion.svg>
              Custom Components
            </motion.button>
          </NavLink>
        </motion.div>
      </motion.section>
  );
};

export default HeroSection;

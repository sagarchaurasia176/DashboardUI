import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaRegObjectGroup,
  FaBolt,
  FaMobileAlt,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import '../styles/offer-section.css';

gsap.registerPlugin(ScrollTrigger);

const OfferSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.feature-card');
    cards.forEach((card, index) => {
      if (card instanceof Element) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center", 
            scrub: 1,
          },
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
        });
      }
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative p-8 text-white">
        <section ref={sectionRef} className="flex justify-center items-center py-20">
          <div className="max-w-6xl text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
            >
              Why Choose Dashboard_UI?
            </motion.h2>

            <div
              ref={cardsRef}
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-9"
            >
              {[
                {
                  icon: FaCode,
                  title: "Ready-to-use Components",
                  description: "Over 100+ customizable UI components",
                  gradient: "from-blue-500 to-purple-500",
                },
                {
                  icon: FaRegObjectGroup,
                  title: "Flexible Templates",
                  description: "Pre-designed layouts for quick setup",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: FaBolt,
                  title: "Performance Optimized",
                  description: "Fast-loading, efficient dashboard solutions",
                  gradient: "from-pink-500 to-red-500",
                },
                {
                  icon: FaMobileAlt,
                  title: "Responsive Design",
                  description: "Optimized for all devices, ensuring a seamless experience",
                  gradient: "from-red-500 to-orange-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`feature-card relative group overflow-hidden rounded-xl`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-95" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Card Content */}
                  <div className="relative p-8 z-10">
                    <div className="flex flex-col items-center">
                      <feature.icon className={`h-10 w-10 mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mt-4 text-center">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default OfferSection;

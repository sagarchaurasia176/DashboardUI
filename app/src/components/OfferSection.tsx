import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaRegObjectGroup,
  FaBolt,
  FaShieldAlt,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OfferSection = () => {
  const cardMovesWithScrollTrigger = useRef(null);

  useGSAP(() => {
    const triggerElem = cardMovesWithScrollTrigger.current;
    gsap.to(cardMovesWithScrollTrigger.current, {
      scale: 1,
      duration: 2,
      ease: "power4.out",
    });
  });

  return (
    <div>
      <div className="p-2 text-white">
        <section className=" flex justify-center  items-center">
          {/* main div */}
          <div className="max-w-6xl text-center  px-4">
            <h2 className="text-5xl font-bold mb-12 text-center">
              Why Choose Dashboard_UI?
            </h2>
            <div
              ref={cardMovesWithScrollTrigger}
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-9 mr-4"
            >
              {[
                {
                  icon: FaCode,
                  title: "Ready-to-use Components",
                  description: "Over 100+ customizable UI components",
                },
                {
                  icon: FaRegObjectGroup,
                  title: "Flexible Templates",
                  description: "Pre-designed layouts for quick setup",
                },
                {
                  icon: FaBolt,
                  title: "Performance Optimized",
                  description: "Fast-loading, efficient dashboard solutions",
                },
                {
                  icon: FaMobileAlt,
                  title: "Responsive Design",
                  description:
                    "Optimized for all devices, ensuring a seamless experience",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="feature-card bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    <feature.icon className="h-8 w-8 mb-2 text-yellow-500" />
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mt-4">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OfferSection;

import React, { useEffect } from "react";
import { FaCode, FaRegObjectGroup, FaBolt, FaShieldAlt } from "react-icons/fa"; // Import icons from react-icons
import gsap from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

const OfferSection = () => {
  return (
    <div>
      <div className="min-h-screen text-white">
        <section className="py-20 w-full">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Choose Dashboard_UI?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  icon: FaShieldAlt,
                  title: "Secure & Reliable",
                  description: "Built with best practices for data protection",
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

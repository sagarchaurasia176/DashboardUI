import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa";
import '../styles/footer-animations.css';

const FooterSection = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sagarchaurasia176/DashboardUI",target:"_blank", label: "GitHub" },
  ];


  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5" />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Footer Content */}
      <div className="relative max-w-7xl   mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              © 2025 Dashboard_UI. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="social-icon-link"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

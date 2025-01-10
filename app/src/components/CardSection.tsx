import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCopy, FaPaste, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import '../styles/card-animations.css';

const CardSection = () => {
  const features = [
    {
      icon: FaCopy,
      title: "Copy Components",
      description: "Easily copy pre-built components with a single click",
      color: "text-pink-400",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: FaPaste,
      title: "Paste & Customize",
      description: "Seamlessly integrate and customize to match your needs",
      color: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaRocket,
      title: "Launch Faster",
      description: "Accelerate your development process significantly",
      color: "text-green-400",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Create a timeline for each feature card
    features.forEach((_, index) => {
      gsap.fromTo(`.feature-card-${index}`, 
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `.feature-card-${index}`,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none none none",
            once: true,
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Build Faster, Launch Sooner
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Transform your development workflow with our intuitive copy-paste components. 
            Build professional dashboards in minutes, not hours.
          </p>
        </motion.div>

        {/* Features Column */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`feature-card feature-card-${index} group`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 p-6 bg-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-800/50">
                  <feature.icon size={30} className={`${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div>
                    <h3 className="font-semibold text-xl text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="showcase-card group"
            >
              <img
                className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                src="http://res.cloudinary.com/dakddv1pm/image/upload/v1732187483/posts/gkic1e4e4urfemnutp4a.png"
                alt="Dashboard Preview 1"
              />
              <div className="showcase-card-overlay" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="showcase-card group"
            >
              <img
                className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                src="http://res.cloudinary.com/dakddv1pm/image/upload/v1732187458/posts/lthcz7aprnvldihburzi.png"
                alt="Dashboard Preview 2"
              />
              <div className="showcase-card-overlay" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

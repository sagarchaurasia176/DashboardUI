import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Ensure the Navbar import is correct

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  benefits: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, benefits, isPopular }) => {
  document.title = "Dashboard_UI | Pricing ";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-6 rounded-2xl shadow-xl ${isPopular ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : ' bg-slate-700 text-white'}`}
    >
      {isPopular && (
        <span className="absolute -top-3 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
          Popular
        </span>
      )}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl md:text-4xl font-bold">{price}</span>
        <span className="text-white text-lg">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-lg md:text-xl">
            <svg
              className={`w-5 h-5 mr-2 ${isPopular ? 'text-white' : 'text-green-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <h4 className="font-semibold text-xl md:text-2xl mb-3">Benefits:</h4>
      <ul className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
         <li key={index} className="text-white text-lg md:text-xl">
            {benefit}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 rounded-lg font-semibold transition-all ${
          isPopular
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Basic',
      price: '$29',
      features: ['5 Dashboard Components', 'Basic Analytics', 'API Access'],
      benefits: [
        '✅ Perfect for small projects',
        '✅ Affordable for startups and individuals',
        '✅ Access to essential tools to get started',
      ]
    },
    {
      title: 'Pro',
      price: '$79',
      features: [
        'Unlimited Dashboard Components',
        ' Advanced Analytics',
        'Priority Support',
        'API Access',
        'Custom Integrations',
      ],
      benefits: [
        '✅ Best value for most users',
        '✅ Priority customer support for faster responses',
        '✅ Advanced customization options with custom integrations',
        '✅ Ideal for growing businesses',
      ],
      isPopular: true,
    },
  
  ];

  return (
    <section className="bg-slate-950 h-screen">
      <Navbar />
      <div className="container   mx-auto px-4">
        <div className="text-center relative top-12 lg:top-12 sm:top-10 md:top-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Choose Your Perfect Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg sm:text-xl md:text-2xl"
          >
            Select the plan that best fits your needs and start creating amazing projects today
          </motion.p>
        </div>
        <div className="sm:grid sm:grid-cols-2  lg:flex lg:justify-center lg:items-center gap-8 sm:mt-20 md:mt-40 lg:mt-40">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

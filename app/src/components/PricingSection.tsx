import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isPopular }) => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-6 rounded-2xl shadow-xl ${
        isPopular ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-white'
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
          Popular
        </span>
      )}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-500">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
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
    </>

  );
};

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Basic',
      price: '$29',
      features: [
        '5 Projects',
        '10GB Storage',
        'Basic Analytics',
        'Email Support',
        'API Access'
      ]
    },
    {
      title: 'Pro',
      price: '$79',
      features: [
        'Unlimited Projects',
        '100GB Storage',
        'Advanced Analytics',
        'Priority Support',
        'API Access',
        'Custom Integrations'
      ],
      isPopular: true
    },
    {
      title: 'Enterprise',
      price: '$149',
      features: [
        'Unlimited Everything',
        'Unlimited Storage',
        'Custom Analytics',
        '24/7 Support',
        'Premium API Access',
        'Custom Integrations',
        'Dedicated Account Manager'
      ]
    }
  ];

  return (
    <section className=" bg-slate-950  h-screen ">
        <Navbar/>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Choose Your Perfect Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Select the plan that best fits your needs and start creating amazing projects today
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

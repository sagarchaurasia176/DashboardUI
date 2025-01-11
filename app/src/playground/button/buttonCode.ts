const ButtonCode = {
  name: "Button",
  code: `
import React from "react";

const Button: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-8">
      {/* Primary Button */}
      <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
        Primary
      </button>

      {/* Secondary Button */}
      <button className="px-6 py-2 text-blue-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300">
        Secondary
      </button>

      {/* Outline Button */}
      <button className="px-6 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
        Outline
      </button>

      {/* Rounded Button */}
      <button className="px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-300">
        Rounded
      </button>

      {/* Gradient Button */}
      <button className="px-6 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300">
        Gradient
      </button>

      {/* Danger Button */}
      <button className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">
        Danger
      </button>

      {/* Disabled Button */}
      <button
        className="px-6 py-2 text-gray-400 bg-gray-200 rounded-lg cursor-not-allowed"
        disabled
      >
        Disabled
      </button>

      {/* Icon Button */}
      <button className="flex items-center px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-300">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h11M9 21V3m0 0l-3.39 3.39m6.78 0L9 3"
          ></path>
        </svg>
        Icon Button
      </button>
    </div>
  );
};

export default Button;
  `,
  description:
    "A custom-built button component. Get your own personalized button for webpages",
};

export default ButtonCode;

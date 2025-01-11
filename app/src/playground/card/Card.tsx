import React from "react";
import logo from "../../assets/logo.png";

const Card: React.FC = () => {
  return (
    <div className="flex flex-row justify-center gap-12 flex-wrap p-6">
      {/* Card 1 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Dashboard UI</h1>
          <p className="text-gray-600 mt-4">
            Experience the beauty of nature through stunning landscapes and scenic views.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Dashboard UI</h1>
          <p className="text-gray-600 mt-4">
            Explore modern and reusable dashboard components for your projects.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Dashboard UI</h1>
          <p className="text-gray-600 mt-4">
            Create stunning UIs with reusable and scalable components.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

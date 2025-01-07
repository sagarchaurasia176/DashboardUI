import React, { useState } from "react";
import { ComponentsList, AdditionalList } from "../utils/ComponentsList";
import { Link, useNavigate } from "react-router-dom";
import { FaTools, FaPlus, FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the sidebar
  const navigate = useNavigate();

  const handleComponentURL = (name: string) => {
    const name_url = name.toLowerCase().replace(/\s/g, "");
    navigate(`/components/?component=${name_url}`);
    setIsOpen(false); // Close sidebar after navigation
  };

  return (
    <>
      <button
        className=" absolute top-4   left-1 z-50 bg-orange-500 text-white p-2 rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 left-0 h-screen w-[75%] md:w-[20%] bg-gray-800 text-white overflow-y-auto transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="font-sans flex items-center bg-orange-400 p-2 rounded-lg font-semibold text-xl m-4">
          <FaPlus className="mr-2 text-slate-700" />
          <Link to="/installation" onClick={() => setIsOpen(false)}>
            Installation
          </Link>
        </div>

        <div className="gap-4 px-4">
          <h2 className="font-sans font-semibold text-lg bg-orange-100 rounded-md text-black p-2 flex items-center">
            <FaPlus className="mr-2" /> Components
          </h2>
          <div className="flex flex-col gap-3 mt-2">
            {ComponentsList.map((component, index) => {
              const { name, icon } = component;
              return (
                <div
                  key={index}
                  className="flex rounded-md gap-4 p-1 items-center text-lg cursor-pointer transition duration-500 ease-in-out hover:bg-gradient-to-r from-purple-600 via-blue-slate-800 to-blue-900"
                  onClick={() => handleComponentURL(name)}
                >
                  {icon}
                  {name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="gap-4 px-4 mt-6">
          <h2 className="font-sans bg-orange-100 rounded-md text-black font-semibold p-2 text-md flex items-center">
            <FaPlus className="mr-2" /> Additional Components
          </h2>
          <div className="flex flex-col gap-3 mt-2">
            {AdditionalList.map((component, index) => {
              const { name, icon } = component;
              return (
                <div
                  key={index}
                  className="flex p-1 rounded-md items-center gap-3 text-lg cursor-pointer transition duration-500 ease-in-out hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                  onClick={() => handleComponentURL(name)}
                >
                  {icon}
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

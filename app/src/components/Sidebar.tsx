import React from "react";
import { ComponentsList, AdditionalList } from "../utils/ComponentsList";
import { Link, useNavigate } from "react-router-dom";
import { FaTools, FaPlus } from "react-icons/fa"; // Import icons
import { Icon } from "@radix-ui/themes/dist/cjs/components/callout";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleComponentURL = (name: string) => {
    const name_url = name.toLowerCase().replace(/\s/g, "");
    navigate(`/components/?component=${name_url}`);
  };

  return (
    <div
      className="fixed z-40 mt-[6rem] left-0 overflow-y-auto h-screen sm:w-64 lg:w-80 w-full bg-gray-800 text-white transition-all duration-300 ease-in-out"
    // based upon top - it reduce the h size
      style={{ maxHeight: 'calc(100vh - 6rem)' }} 
    >
      <div className="font-sans flex items-center bg-orange-400 p-2 rounded-lg font-semibold text-xl m-4">
        <FaPlus className="mr-2 text-slate-700" />
        <Link to="/installation">Installation</Link>
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
            const { name , icon } = component;
            return (
              <div
                key={index}
                className="flex p-1 rounded-md items-center gap-3  text-lg cursor-pointer transition duration-500  ease-in-out hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
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
  );
};

export default Sidebar;

import React from "react";
import { ComponentsList, AdditionalList } from "../utils/ComponentsList";
import { Link } from "react-router-dom";
import { FaTools, FaPlus } from "react-icons/fa"; // Import icons
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleComponentURL = (name: string) => {
    const name_url = name.toLowerCase().replace(/\s/g, "");
    navigate(`/components/?component=${name_url}`);
  };

  return (
    <div className="sm:hidden md:inline text-white py-4 px-4 overflow-y-auto bg-gray-800">
      <div className="font-sans  flex items-center bg-orange-400 p-2 rounded-lg font-semibold text-xl">
        <FaPlus className="mr-2 text-slate-700" />
        <Link to="/installation">Installation</Link>
      </div>
      <br />
      <div className="gap-4">
        <h2 className="font-sans font-semibold text-lg bg-orange-100 rounded-md text-black p-2 flex items-center">
          <FaPlus className="mr-2" /> {/* Added icon */}
          Components
        </h2>
        <div className="flex flex-col gap-3">
          <p>&nbsp;</p>
          {ComponentsList.map((component, index) => {
            const { name, icon } = component;
            return (
              <div
                key={index}
                className="mx-2 my-2 flex gap-4 items-center text-lg cursor-pointer"
                onClick={() => handleComponentURL(name)}
              >
                {icon}
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <p>&nbsp;</p>

      <div className="flex flex-col gap-3">
        <h2 className="font-sans bg-orange-100 rounded-md text-black font-semibold  p-2 text-md flex items-center">
          <FaPlus className="mr-2" /> {/* Added icon */}
          Additional Components
        </h2>

        <div className="flex flex-col gap-3">
          {AdditionalList.map((component, index) => {
            const { name } = component;
            return (
              <div
                className="mx-2 my-2 flex gap-4 items-center text-lg cursor-pointer"
                key={index}
                onClick={() => handleComponentURL(name)}
              >
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

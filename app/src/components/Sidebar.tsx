import React from "react";
import { ComponentsList, AdditionalList } from "../utils/ComponentsList";
import { Link } from "react-router-dom";
import { FaTools, FaPlus } from "react-icons/fa"; // Import icons

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col m-2 gap-8 mt-16 ml-20 border-r-[1px] border-white text-white p-8">
      <div className="font-sans font-semibold text-xl">
        <Link to="/components">Installation</Link>
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
            return (
              <Link to={component.href} key={index} className="mx-2">
                {component.name}
              </Link>
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
            return (
              <Link to={component.href} className="mx-2" key={index}>
                {component.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

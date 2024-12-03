import React from "react";
import { ComponentsList, AdditionalList } from "../utils/ComponentsList";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col m-2 gap-8 mt-16 ml-20 bg-gray-800 text-white p-8 rounded-2xl">
      <div>
        <Link to="/components">Installation</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-sans font-semibold text-lg">Components</h2>
        <div className="flex flex-col gap-3">
          {ComponentsList.map((component, index) => {
            return (
              <Link to={component.href} key={index} className="mx-2">
                {component.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-sans font-semibold text-lg">
          Additional Components
        </h2>
        <div className="flex flex-col gap-3">
          {AdditionalList.map((component, index) => {
            return (
              <Link to={component.href} className="mx-2">
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

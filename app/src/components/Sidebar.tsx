import React from "react";
import ComponentsList from "../utils/ComponentsList";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col m-2 gap-16 mt-16 ml-20 bg-black text-white p-8 rounded-2xl">
      {ComponentsList.map((component, index) => {
        return <button key={index}>{component}</button>;
      })}
    </div>
  );
};

export default Sidebar;

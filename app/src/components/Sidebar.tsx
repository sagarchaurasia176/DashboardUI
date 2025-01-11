import React, { useContext } from "react";
import { ComponentsList, AdditionalList } from "../utils/ComponentsList";
import { Link, useNavigate } from "react-router-dom";
import { FaTools, FaPlus, FaBars, FaTimes } from "react-icons/fa";
import { SidebarContext } from "../context/SidebarContext";

const Sidebar: React.FC = () => {
  const { isCollapsed, toggleSidebar } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleComponentURL = (name: string) => {
    const name_url = name.toLowerCase().replace(/\s/g, "");
    navigate(`/components/?component=${name_url}`);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed md:sticky top-0 left-0 h-screen  overflow-y-auto
          ${!isCollapsed ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-16'}
          bg-gray-800 text-white transition-all duration-300 ease-in-out z-40
          overflow-hidden`}
      >
        <div className="font-sans p-4">
          <Link 
            to="/installation" 
            className={`flex items-center bg-orange-400 p-2 rounded-lg font-semibold 
              ${isCollapsed ? 'justify-center' : ''}`}
          >
            <FaPlus className="text-slate-700" />
            {!isCollapsed && <span className="ml-2">Installation</span>}
          </Link>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <h2 className={`font-sans font-semibold bg-orange-100 rounded-md text-black p-2 flex items-center 
              ${isCollapsed ? 'justify-center' : ''}`}
            >
              <FaPlus />
              {!isCollapsed && <span className="ml-2">Components</span>}
            </h2>
            
            <div className="flex flex-col gap-3 mt-4">
              {ComponentsList.map((component, index) => (
                <div
                  key={index}
                  className={`flex rounded-md p-2 items-center cursor-pointer
                    transition duration-300 hover:bg-gray-700
                    ${isCollapsed ? 'justify-center' : ''}`}
                  onClick={() => handleComponentURL(component.name)}
                >
                  <span>{component.icon}</span>
                  {!isCollapsed && <span className="ml-3">{component.name}</span>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className={`font-sans bg-orange-100 rounded-md text-black font-semibold p-2 flex items-center 
              ${isCollapsed ? 'justify-center' : ''}`}
            >
              <FaPlus />
              {!isCollapsed && <span className="ml-2">Additional</span>}
            </h2>
            
            <div className="flex flex-col gap-3 mt-4">
              {AdditionalList.map((component, index) => (
                <div
                  key={index}
                  className={`flex rounded-md p-2 items-center cursor-pointer
                    transition duration-300 hover:bg-gray-700
                    ${isCollapsed ? 'justify-center' : ''}`}
                  onClick={() => handleComponentURL(component.name)}
                >
                  <span>{component.icon}</span>
                  {!isCollapsed && <span className="ml-3">{component.name}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

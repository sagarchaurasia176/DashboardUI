import { useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./SeprateCssForSideBar.css";
import { HeaderName } from "../../../../apis/DashboardSidebarContent";
// SideBar
const SideBar = () => {

  return (
    <div className="w-[20%] relative p-2 text-wrap mt-[5%] left-3 h-full text-white">
      {/* <div className="" id="scroll-containers" data-scroll-container> */}
      <div className="h-full overflow-y-auto">
        <div className=" text-white flex  flex-col">
          <b>{HeaderName.description}</b>
          <button
            className="flex cursor-pointer hover:transition-all hover:duration-75 
                 text-md w-full"
          >
            {HeaderName.identifier}
          </button>
          <button className="flex cursor-pointer hover:transition-all hover:duration-75  text-md w-full">
            {HeaderName.identifiers}
          </button>
        </div>

        {/* <button  className=" bg-red-200 cursor-pointer  hover:transition-all hover:duration-75   hover:animate-bounce text-xs">{val.name}</button> */}
      </div>
    </div>
  );
};

export default SideBar;

import { useLocation } from "react-router-dom";
import { HeaderName, links } from "../../../apis/DashboardSidebarContent";
import React, { useContext, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./SeprateCssForSideBar.css";
import { GlobalState } from "../../../context/GloablaStateManage";
// SideBar
const SideBar = () => {
  // dashBoard Component render while the users click to button automatically
  const { ComponentsRenderedToTheRightSideInDashBoard } =
    useContext(GlobalState);

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
          <button onClick={()=>ComponentsRenderedToTheRightSideInDashBoard("BioManish")} className="flex cursor-pointer hover:transition-all hover:duration-75  text-md w-full">
            {HeaderName.identifiers}
          </button>
        </div>

        {links.map((val, index) => (
          <div key={index} className="p-2 max-w-full w-full  text-white">
            <b>{val.description}</b>
            <button className="flex cursor-pointer hover:transition-all hover:duration-75 hover:animate-bounce text-xs w-full">
              {val.name}
            </button>
          </div>
        ))}

        {/* <button  className=" bg-red-200 cursor-pointer  hover:transition-all hover:duration-75   hover:animate-bounce text-xs">{val.name}</button> */}
      </div>
    </div>
  );
};

export default SideBar;

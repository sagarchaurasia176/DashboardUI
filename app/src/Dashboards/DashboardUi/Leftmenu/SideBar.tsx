import { useLocation } from "react-router-dom";
import { links } from "../../../apis/DashboardSidebarIcons";
import React, { useContext, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./SeprateCssForSideBar.css";
import { GlobalState } from "../../../context/GloablaStateManage";
// SideBar
const SideBar = () => {

  return (
    <div className="w-[20%] relative p-2 text-wrap mt-[5%] left-3 h-full text-white">
      {/* <div className="" id="scroll-containers" data-scroll-container> */}
      <div className="h-full overflow-y-auto">
        {links.map((val, index) => (
          <div key={index} className="p-2 flex flex-shrink-0 flex-col text-white">
            <b>{val.description}</b>
            <span className=" text-xs">{val.name}</span>
            <span>{val.identifier}</span>
            <span>{val.identifiers}</span>
          </div>
        ))}
      </div>


      {/* </div> */}
    </div>
  );
};

export default SideBar;

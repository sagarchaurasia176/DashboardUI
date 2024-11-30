import React, { useState } from "react";
import SideBar from "./Leftmenu/SideBar";
// open-bar
// import { FaBarsStaggered } from "react-icons/fa6";
//colosed bar
// import { IoClose } from "react-icons/io5";

const DashboardMainUi = () => {
  // side bar

  return (
    <div className="  bg-slate-950 h-screen text-white  font-normal  font-sans">
        {/* manange both right and left side bar component here */}
        <div className=" flex flex-row p-1 h-screen">
            <SideBar/>
            
        </div>

    </div>
  );
};
export default DashboardMainUi;

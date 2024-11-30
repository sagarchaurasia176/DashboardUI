import React, { useContext, useState } from "react";
import SideBar from "./Leftmenu/SideBar";
import { GlobalState } from "../../context/GloablaStateManage";
// open-bar
// import { FaBarsStaggered } from "react-icons/fa6";
//colosed bar
// import { IoClose } from "react-icons/io5";
// Dashboard main Ui where all components are presents
const DashboardMainUi = () => {
  const { componentMapping, DashboardComponentsRenderToRightSide } =
    useContext(GlobalState);
  const alert = "not show the ui"
  return (
    <div className=" h-full text-white  font-normal  font-sans">
      {/* manange both right and left side bar component here */}
      <div className=" flex flex-row p-1 h-screen">
        {/* left side bar */}
        <SideBar />
        <div className=" w-full overflow-y-auto mt-[5vw]">
        <div className="">
        {componentMapping[DashboardComponentsRenderToRightSide]}
        </div>
        </div>
        {/* all components would rendered there directly  */}
      </div>      
    </div>
  );
};
export default DashboardMainUi;

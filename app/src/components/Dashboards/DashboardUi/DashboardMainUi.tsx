import React, { useContext, useState } from "react";
import SideBar from "./Leftmenu/SideBar";

const DashboardMainUi = () => {
  return (
    <div className=" h-full text-white  font-normal  font-sans">
      {/* manange both right and left side bar component here */}
      <div className=" flex flex-row p-1 h-screen">
        {/* left side bar */}
        <SideBar />
        <div className=" w-full overflow-y-auto mt-[5vw]">
        </div>
        {/* all components would rendered there directly  */}
      </div>      
    </div>
  );
};
export default DashboardMainUi;

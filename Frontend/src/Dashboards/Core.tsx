import React from "react";
import SideMenu from "./core/LeftSideBar/SideMenu";
import Components from "./core/RightSideBar/ComponentSections";

const Core = () => {
  return (
    <div>
      {/* side bar of the next page */}
      <SideMenu />
      {/* components render */}
      <Components />
    </div>
  );
};

export default Core;

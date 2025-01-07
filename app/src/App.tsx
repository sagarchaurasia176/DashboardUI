import React, { useEffect, useRef } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
// import LocomotiveScroll from 'locomotive-scroll';
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "@radix-ui/themes/styles.css";

import InstallationPage from "./pages/InstallationPage";
import LandingPage from "./pages/LandingPage";
import ComponentPage from "./pages/ComponentPage";
import Templates from "./components/Templates";

const App: React.FC = () => {
  return (
    <>
        {/* <Navbar /> */}
        <div className=" bg-slate-950">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/components" element={<ComponentPage />} />
            <Route path="/installation" element={<InstallationPage />} />
            <Route path="/Templates/Ui" element={<Templates />} />
          </Routes>
        </div>
    </>
  );
};

export default App;

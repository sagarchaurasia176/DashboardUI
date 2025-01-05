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
      <div className="">
        <Navbar />
        <div className="h-screen bg-slate-950">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* Test */}
            <Route path="/components" element={<ComponentPage />} />

            {/* Browse Components */}
            <Route path="/installation" element={<InstallationPage />}></Route>
            {/* Template for beautyful ui */}
            <Route path="/Templates/Ui" element={<Templates />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSections from "./components/pages/HeroSections";
import MainSections from "./components/pages/MainSections";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the CSS
import Core from "./Dashboards/Core";

const App = () => {
  // Initialize LocomotiveScroll
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#root"), // Attach to the correct element
      smooth: true,
    });
    return () => {
      // Clean up LocomotiveScroll when the component unmounts
      scroll.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <div className="bg-slate-950">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<MainSections />} />
          {/* Browse Components */}
          <Route path="/ui/components" element={<Core />}></Route>
          {/* custom Components */}
          <Route path="/ui/components" element={<Core />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

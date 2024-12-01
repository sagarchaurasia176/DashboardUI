import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

// import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the CSS
// import Core from "./Dashboards/Core";
import ComponentsPage from "./pages/ComponentsPage";
import ButtonPage from "./pages/ButtonPage";

const App: React.FC = () => {
  // Initialize LocomotiveScroll
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("#root"), // Attach to the correct element
  //     smooth: true,
  //   });
  //   return () => {
  //     // Clean up LocomotiveScroll when the component unmounts
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Browse Components */}
          <Route path="/components" element={<ComponentsPage />}></Route>
          <Route path="/components/button" element={<ButtonPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

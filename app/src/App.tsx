import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the CSS
import DashboardMainUi from "./Dashboards/DashboardUi/DashboardMainUi";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: true,
    });

    // Update LocomotiveScroll on route change
    scroll.update();

    return () => {
      scroll.destroy();
    };
  }, [location.pathname]); // Reinitialize on route change

  return (
    <div id="scroll-container" data-scroll-container className="bg-slate-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ui/components" element={<DashboardMainUi />} />
      </Routes>
    </div>
  );
};

export default App;

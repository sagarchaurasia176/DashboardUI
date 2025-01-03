import React, { useEffect, useRef } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
// import LocomotiveScroll from 'locomotive-scroll';
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

//pages
import {
  LandingPage,
  ComponentsPage,
  Barchart,
  ButtonPage,
  NavbarPage,
  PieChart,
  Card,
  Donut,
  Footer,
  Linechart,
  Scatterseries,
} from "./pages/index";
import Templates from "./components/Templates";

const App: React.FC = () => {
  return (
    <>
      <div className="">
        <Navbar />
       
        <div className="h-screen bg-slate-950">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* Browse Components */}
            <Route path="/components" element={<ComponentsPage />}></Route>
            <Route path="/components/barchart" element={<Barchart />}></Route>
            <Route path="/components/button" element={<ButtonPage />}></Route>
            <Route path="/components/navbar" element={<NavbarPage />}></Route>
            <Route path="/components/piechart" element={<PieChart />}></Route>
            <Route path="/components/card" element={<Card />}></Route>
            <Route path="/components/donut" element={<Donut />}></Route>
            <Route path="/components/footer" element={<Footer />}></Route>
            <Route path="/components/linechart" element={<Linechart />}></Route>
            <Route
              path="/components/scatterseries"
              element={<Scatterseries />}
            ></Route>
            {/* Template for beautyful ui */}
            <Route path="/Templates/Ui" element={<Templates />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;

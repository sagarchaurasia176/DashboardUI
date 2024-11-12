import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSections from "./components/pages/HeroSections";
import MainSections from "./components/pages/MainSections";

const App = () => {
  return (
    <>
      <div className=" bg-slate-950 ">
      <Navbar />

        {/*Browser routes  */}
        <Routes>
          <Route path="/" element={<MainSections/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

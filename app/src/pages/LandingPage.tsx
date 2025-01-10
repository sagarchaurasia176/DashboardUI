import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import OfferSection from "../components/OfferSection";
import BuildSection from "../components/BuildSection";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-slate-900">
        <HeroSection />
        <CardSection />
        <OfferSection />
        <BuildSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default LandingPage;

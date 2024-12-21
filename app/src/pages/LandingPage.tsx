import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import OfferSection from "../components/OfferSection";
import BuildSection from "../components/BuildSection";
import FooterSection from "../components/FooterSection";

const LandingPage: React.FC = () => {
  return (
    <div className=" bg-slate-900">
      <HeroSection />
      <CardSection />
      <OfferSection />
      <BuildSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;

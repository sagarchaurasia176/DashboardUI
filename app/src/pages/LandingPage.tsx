import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import OfferSection from "../components/OfferSection";
import BuildSection from "../components/BuildSection";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
const LandingPage: React.FC = () => {
  return (
    <div>
      <div className=" bg-slate-900">
        <Navbar/>
        <HeroSection />
        <CardSection />
        <OfferSection />
        {/* Testim */}
        <Testimonials/>
        <BuildSection />
        <FooterSection />

      </div>
    </div>
  );
};

export default LandingPage;

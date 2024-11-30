import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import OfferSection from "../components/OfferSection";
import BuildSection from "../components/BuildSection";
import FooterSection from "../components/FooterSection";

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* here you can import all your main web page design components  */}
      <HeroSection />
      <CardSection />
      <OfferSection />
      <BuildSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;

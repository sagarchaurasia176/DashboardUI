import React from "react";
import HeroSections from "./HeroSections";
import CardSections from "./CardSections";
import OfferSection from "./OfferSection";
import BuildSection from "./BuildSection";
import FooterSection from "./FooterSection";

const MainSections = () => {
  return (
    <div className="">
      {/* header */}
      <HeroSections />
      {/* we-build-section */}
      <CardSections />
      {/* offer-section */}
      <OfferSection/>
      {/* build-section */}
      <BuildSection/>
      {/* footer-section */}
      <FooterSection/>
    </div>
  );
};

export default MainSections;

import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import OfferSection from "../components/OfferSection";
import BuildSection from "../components/BuildSection";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

export default function LandingPage() {
  return (
    <div className="bg-slate-900 scrollbar-overlay" onClick={() => {}}>
      <Navbar />
      <HeroSection />
      <CardSection />
      <OfferSection />
      <Testimonials />
      <BuildSection />
      <FooterSection />
    </div>
  );
}

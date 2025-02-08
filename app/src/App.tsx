import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { SidebarProvider } from "./context/SidebarContext";
import {
  InstallationPage,
  LandingPage,
  ComponentPage,
  CheckoutPage,
  CompletePage,
  PricingPage,
  ContactusPage,
  TemplatesPage,
} from "./pages/index";
import { Toaster } from "./shadcn/components/ui/toaster";
import { useGlobalContext } from "../ThemeContext";
import "./App.css";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const App: React.FC = () => {
  const { clientSecret } = useGlobalContext();
  return (
    <>
      <Toaster />
      <SidebarProvider>
        <div className="flex min-h-screen bg-gray-100">
          <div className="flex-1 flex flex-col min-h-screen">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/components" element={<ComponentPage />} />
              <Route path="/installation" element={<InstallationPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contactus" element={<ContactusPage />} />
              <Route path="/Templates/Ui" element={<TemplatesPage />} />
              {clientSecret && (
                <Route
                  path="/*"
                  element={
                    <Elements
                      options={{
                        clientSecret,
                        appearance: { theme: "stripe" },
                        loader: "auto",
                      }}
                      stripe={stripePromise}
                    >
                      <Routes>
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/complete" element={<CompletePage />} />
                      </Routes>
                    </Elements>
                  }
                />
              )}
            </Routes>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default App;

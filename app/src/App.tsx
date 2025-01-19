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
import "./App.css";
// test

// call loadStripe outside of a component’s render to avoid recreating the Stripe object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const App: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | undefined>("");
  if (!clientSecret) {
    const secret = localStorage.getItem("client_secret");
    if (secret) {
      setClientSecret(secret);
    } else {
      console.log("Client Secret not available");
    }
  }
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
              <Route
                path="/Templates/Ui"
                element={<TemplatesPage setClientSecret={setClientSecret} />}
              />
              {clientSecret ? (
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
              ) : (
                <Route
                  path="/checkout"
                  element={
                    <div className="text-white text-center">
                      Loading payment details...
                    </div>
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

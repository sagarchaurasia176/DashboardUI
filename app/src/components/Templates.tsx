import React, { useState } from "react";
import axios from "axios";
import { TemplatesDetails, TemplatesBio } from "../apis/Templates";
import { useLocation } from "react-router-dom";

// Declare the global interface for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Interface for template state
interface TemplateState {
  name: string;
  price: string;
}

// Interface for Razorpay options
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => Promise<void>;
  theme: {
    color: string;
  };
}
// Interface for Razorpay response
interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
const Templates: React.FC = () => {
  const location = useLocation();

  const [template, setTemplate] = useState<TemplateState>({
    name: TemplatesDetails.title, // Replace with `TemplatesDetails.title` if accessible
    price: "1000",
  });
  // Initialize Razorpay payment
  const initPay = async (data: {
    id: string;
    currency: string;
    amount: number;
  }) => {
    const options: RazorpayOptions = {
      key: import.meta.env.VITE_Key_Secret as string,
      amount: data.amount,
      currency: data.currency,
      name: template.name,
      description: "Test",
      order_id: data.id,

      // Handler applied it
      handler: async (response: RazorpayResponse) => {
        try {
          const verifyURL = `${
            import.meta.env.VITE_Backend
          }/api/pay/api/order/verify`;
          const verificationResponse = await axios.post(verifyURL, response);
          console.log(
            "Payment verification successful:",
            verificationResponse.data
          );
        } catch (error) {
          console.error("Payment verification failed:", error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  // Handle the payment process
  const handlePay = async () => {
    try {
      const orderURL = `${import.meta.env.VITE_Backend}/api/pay/api/create/Order`;
      const { data } = await axios.post(orderURL,
     {
        amount: parseInt(template.price) * 100,
      }); // Multiply by 100 for Razorpay's format
      console.log("Order data:", data);
      initPay(data.data);
    } catch (error) {
      console.error("Order creation failed:", error);
    }
  };

  return (
    <div className="absolute w-full mt-32">
      <div className="text-center h-2/3 p-12 text-white">
        <h1>{TemplatesBio.title}</h1>
        <span>{TemplatesBio.descp}</span>
      </div>
      <br />
      <br />
      <div className="flex flex-col lg:flex bg-slate-950 px-4 max-h-screen lg:flex-row shadow-md">
        <div className="w-1/2 text-white font-sans">
          <h2>{TemplatesDetails.title}</h2>
          <br />
          <span>{TemplatesDetails.descp}</span>
          <br />
          <br />
          <div className="flex flex-col lg:flex lg:flex-row">
            <button className="bg-slate-800 p-2 rounded-md" onClick={handlePay}>
              Buy now ₹{template.price}
            </button>
            &nbsp;
            <a
              href="https://courses-db-one.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-slate-800 p-2 rounded-md">
                Live Preview
              </button>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="http://res.cloudinary.com/dakddv1pm/image/upload/v1735661273/posts/b8fcxy4wdbocxwuaueyt.png"
            alt="Template Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Templates;

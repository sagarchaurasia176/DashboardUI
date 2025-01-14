import { TemplatesDetails, TemplatesBio } from "../apis/Templates";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import React, { FormEvent, useState } from "react";
import axios from "axios";
import { currencyConvert } from "../utils/currency-convert";

interface TemplateState {
  name: string;
  price: number;
}
interface PaymentPageProps {
  setClientSecret: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Templates = ({ setClientSecret }: PaymentPageProps) => {
  const [template, setTemplate] = useState<TemplateState>({
    name: TemplatesDetails.title,
    price: 1000,
  });

  const handlePay = async (e: FormEvent) => {
    e.preventDefault();
    // price in USD
    const amount = await currencyConvert({ amount: template.price });
    const paymentResponse = await axios({
      method: "POST",
      url: `${backendUrl}/api/create-payment-intent`,
      data: {
        items: [{ id: "template", amount: amount }],
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (paymentResponse.status != 200) {
      console.log("Payment failed");
    }
    const data = await paymentResponse.data;
    setClientSecret(data.clientSecret);
    localStorage.setItem("client_secret", data.clientSecret);
    window.location.replace("/checkout");
  };
  document.title = "Dashboard_UI |  Templates";
  return (

    <div className="bg-slate-950 w-full min-h-screen overflow-hidden">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-12 text-white"
      >
        <h1 className="text-7xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold underline-offset-2">
          <strong>{TemplatesBio.title}</strong>
        </h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl text-zinc-500 mt-6 block"
        >
          {TemplatesBio.descp}
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col lg:flex-row bg-slate-900/50 backdrop-blur-sm rounded-xl mx-4 p-8 shadow-2xl"
      >
        <div className="lg:w-1/2 text-white font-sans space-y-6">
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="text-3xl font-bold"
          >
            {TemplatesDetails.title}
          </motion.h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            {TemplatesDetails.descp}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePay}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold 
                         hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              {/* TODO make this dynamic */}
              Buy now ₹1000
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://courses-db-one.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 px-6 py-3 rounded-lg font-semibold text-center
                         hover:bg-slate-700 transition-all duration-300"
            >
              Live Preview
            </motion.a>
          </div>
        </div>

        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="http://res.cloudinary.com/dakddv1pm/image/upload/v1735661273/posts/b8fcxy4wdbocxwuaueyt.png"
            alt="Template Preview"
            className="rounded-lg shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Templates;

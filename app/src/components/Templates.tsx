import React, { FormEvent, useState } from "react";
import axios from "axios";
import { TemplatesDetails, TemplatesBio } from "../apis/Templates";
import { currencyConvert } from "../utils/currency-convert";

interface TemplateState {
  name: string;
  price: number;
}
interface PaymentPageProps {
  setClientSecret: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const backendUrl = import.meta.env.VITE_BACKEND_LOCAL;

const Templates = ({ setClientSecret }: PaymentPageProps) => {
  const [template, setTemplate] = useState<TemplateState>({
    name: TemplatesDetails.title,
    price: 1000,
  });

  const handlePay = async (e: FormEvent) => {
    e.preventDefault();
    // price in USD
    const amount = await currencyConvert({ amount: template.price });
    console.log(amount);

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

  return (
    <div className="h-full absolute w-full bg-slate-950 ">
      <div className="text-center h-1/3 text-white">
        <h1>{TemplatesBio.title}</h1>
        <span>{TemplatesBio.descp}</span>
      </div>
      <br />
      <br />
      <div className="flex flex-col lg:flex bg-slate-950 px-4 lg:flex-row shadow-md">
        <div className="w-1/2 text-white font-sans">
          <h2 className="text-2xl">{TemplatesDetails.title}</h2>
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

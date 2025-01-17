import React, { FormEvent, useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import Image from "../assets/template.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../lib/vars";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: null,
    description: "",
    image: "",
  });
  const [message, setMessage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productId = localStorage.getItem("productId");
        const { data } = await axios.get(
          `${BACKEND_URL}/api/v1/product/getProduct`,
          {
            params: {
              productId: productId,
            },
          }
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductDetails();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    const domain = window.location.origin;
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        // `Elements` instance that was used to create the Payment Element
        elements,
        // confirmParams: {
        //     return_url: ``,
        // },
        redirect: "if_required",
      });
      // custom redirect logic
      if (error) {
        setMessage(error.message);
        navigate(
          `/complete?payment_intent=${paymentIntent.id}&payment_intent_client_secret=${paymentIntent.client_secret}&redirect_status=failed`
        );
      } else if (paymentIntent?.status === "succeeded") {
        navigate(
          `/complete?payment_intent=${paymentIntent.id}&payment_intent_client_secret=${paymentIntent.client_secret}&redirect_status=succeeded`
        );
      } else {
        navigate(
          `$/complete?payment_intent=${paymentIntent.id}&payment_intent_client_secret=${paymentIntent.client_secret}&redirect_status=${paymentIntent.status}`
        );
      }
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [message]);

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: "accordion",
    },
    wallets: {
      applePay: "auto",
      googlePay: "auto",
    },
    business: {
      name: "Dashboard UI",
    },
  };

  return (
    <section className="grid grid-cols-2 mt-10">
      <div className="flex flex-col gap-16 ml-96 items-center mt-32">
        <div className="text-gray-500 mr-20">
          <h2 className="font-segoe">{product.name}</h2>
          <p className="py-1">
            <span className="text-4xl font-bold text-gray-700">
              ${product.price}{" "}
            </span>
            only
          </p>
          <p className="text-sm">{product.description}</p>
        </div>
        <img
          src={Image}
          alt="logo"
          className="h-[185 px] w-[300px] border rounded-lg"
        />
      </div>

      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="h-screen w-[450px] border-l-2 pl-4"
      >
        <PaymentElement
          id="payment-element"
          options={paymentElementOptions}
          className="mt-10"
        />

        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="bg-blue-600 py-2 w-full rounded-lg mt-2"
        >
          <span className="button-text items-center text-white">
            {isLoading ? <div id="spinner"></div> : "Pay now"}
          </span>
        </button>
        {message && (
          <div className="text-red-500 text-center" id="payment-message">
            {message}
          </div>
        )}
      </form>
    </section>
  );
}

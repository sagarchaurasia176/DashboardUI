import React, { FormEvent, useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${import.meta.env.VITE_FRONTEND_LOCAL}/complete`,
        },
      });

      if (error) {
        setMessage(error.message);
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
    layout: "accordion",
    wallets: {
      applePay: "auto",
      googlePay: "auto",
    },
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="w-full">
      <PaymentElement
        id="payment-element"
        options={paymentElementOptions}
        className="w-[800px]"
      />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="bg-blue-600 py-1 px-32 rounded-lg mt-1"
      >
        <span className="button-text items-center text-white">
          {isLoading ? <div id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div className="text-red-500" id="payment-message">
          {message}
        </div>
      )}
    </form>
  );
}

import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

const SuccessIcon = (
  <svg width="210" height="210" xmlns="http://www.w3.org/2000/svg">
    <title>Layer 1</title>
    <circle
      r="65"
      cy="110"
      cx="105"
      stroke-width="5"
      stroke="#2b9777"
      fill="none"
    >
      <animate
        attributeName="stroke-width"
        values="0;5"
        dur="0.5s"
        repeatCount="1"
      />
      <animate attributeName="r" values="50;65" dur="1s" repeatCount="1" />
    </circle>
    <polygon
      fill="#43A047"
      points="80,105 100, 125, 130, 85 140, 95 100,145 70,115"
      opacity="0"
    >
      <animate
        attributeName="opacity"
        values="0;1"
        begin="1s"
        dur="0.3s"
        fill="freeze"
      />
    </polygon>
  </svg>
);
const ErrorIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25628 1.25628C1.59799 0.914573 2.15201 0.914573 2.49372 1.25628L8 6.76256L13.5063 1.25628C13.848 0.914573 14.402 0.914573 14.7437 1.25628C15.0854 1.59799 15.0854 2.15201 14.7437 2.49372L9.23744 8L14.7437 13.5063C15.0854 13.848 15.0854 14.402 14.7437 14.7437C14.402 15.0854 13.848 15.0854 13.5063 14.7437L8 9.23744L2.49372 14.7437C2.15201 15.0854 1.59799 15.0854 1.25628 14.7437C0.914573 14.402 0.914573 13.848 1.25628 13.5063L6.76256 8L1.25628 2.49372C0.914573 2.15201 0.914573 1.59799 1.25628 1.25628Z"
      fill="white"
    />
  </svg>
);

const InfoIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V10C1.5 11.3807 2.61929 12.5 4 12.5H10C11.3807 12.5 12.5 11.3807 12.5 10V4C12.5 2.61929 11.3807 1.5 10 1.5ZM4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H10C12.2091 14 14 12.2091 14 10V4C14 1.79086 12.2091 0 10 0H4Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H7.25C7.66421 6.25 8 6.58579 8 7V10.5C8 10.9142 7.66421 11.25 7.25 11.25C6.83579 11.25 6.5 10.9142 6.5 10.5V7.75H6C5.58579 7.75 5.25 7.41421 5.25 7Z"
      fill="white"
    />
    <path
      d="M5.75 4C5.75 3.31075 6.31075 2.75 7 2.75C7.68925 2.75 8.25 3.31075 8.25 4C8.25 4.68925 7.68925 5.25 7 5.25C6.31075 5.25 5.75 4.68925 5.75 4Z"
      fill="white"
    />
  </svg>
);

const STATUS_CONTENT_MAP = {
  succeeded: {
    text: "Thanks for subscribing",
    iconColor: "#30B130",
    icon: SuccessIcon,
  },
  processing: {
    text: "Your payment is processing.",
    iconColor: "#6D6E78",
    icon: InfoIcon,
  },
  requires_payment_method: {
    text: "Your payment was not successful, please try again.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
  default: {
    text: "Something went wrong, please try again.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
};

interface paymentDetailsProps {
  status: string;
  intentId: string | null;
  amount: number | null;
}

export default function CompletePage() {
  const stripe = useStripe();

  const [paymentDetails, setPaymentDetails] = useState<paymentDetailsProps>({
    status: "processing",
    intentId: null,
    amount: null,
  });

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      console.log("no secret");

      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        return;
      }
      setPaymentDetails((prev) => ({
        ...prev,
        status: paymentIntent.status,
        // amount is in cents
        amount: paymentIntent.amount / 100,
        intentId: paymentIntent.id,
      }));
    });
  }, [stripe]);

  return (
    <section
      id="payment-status"
      className="flex flex-col gap-4 pl-4 text-black items-center pt-2"
    >
      <div
        className={
          paymentDetails.intentId ? "border-2 rounded-lg p-5 w-auto" : "w-auto"
        }
      >
        <div id="status-icon" className="flex justify-center">
          {
            STATUS_CONTENT_MAP[
              paymentDetails.status as keyof typeof STATUS_CONTENT_MAP as keyof typeof STATUS_CONTENT_MAP
            ].icon
          }
        </div>
        <h2 id="status-text" className="text-center text-xl">
          {
            STATUS_CONTENT_MAP[
              paymentDetails.status as keyof typeof STATUS_CONTENT_MAP
            ].text
          }
        </h2>

        {paymentDetails.intentId && (
          <div className="border rounded-lg bg-gray-100 flex flex-col gap-2 px-4 mt-8 text-lg">
            <div className="flex place-content-between py-2">
              <span>Amount</span>
              <span>${paymentDetails.amount}</span>
            </div>
            <div className="flex place-content-between py-2">
              <span>Status</span>
              <span>{paymentDetails.status}</span>
            </div>
            <div className="flex place-content-between py-2 gap-4">
              <span>Id</span>
              <span className="text-md">{paymentDetails.intentId}</span>
            </div>
            <hr className="border-t-1 border-gray-400 mt-4" />
            <a
              href={`https://dashboard.stripe.com/payments/${paymentDetails.intentId}`}
              id="view-details"
              // rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-2 justify-center pt-1 pb-3 ">
                View details
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ paddingLeft: "5px" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.125 3.49998C2.64175 3.49998 2.25 3.89173 2.25 4.37498V11.375C2.25 11.8582 2.64175 12.25 3.125 12.25H10.125C10.6082 12.25 11 11.8582 11 11.375V9.62498C11 9.14173 11.3918 8.74998 11.875 8.74998C12.3582 8.74998 12.75 9.14173 12.75 9.62498V11.375C12.75 12.8247 11.5747 14 10.125 14H3.125C1.67525 14 0.5 12.8247 0.5 11.375V4.37498C0.5 2.92524 1.67525 1.74998 3.125 1.74998H4.875C5.35825 1.74998 5.75 2.14173 5.75 2.62498C5.75 3.10823 5.35825 3.49998 4.875 3.49998H3.125Z"
                    fill="#0055DE"
                  />
                  <path
                    d="M8.66672 0C8.18347 0 7.79172 0.391751 7.79172 0.875C7.79172 1.35825 8.18347 1.75 8.66672 1.75H11.5126L4.83967 8.42295C4.49796 8.76466 4.49796 9.31868 4.83967 9.66039C5.18138 10.0021 5.7354 10.0021 6.07711 9.66039L12.7501 2.98744V5.83333C12.7501 6.31658 13.1418 6.70833 13.6251 6.70833C14.1083 6.70833 14.5001 6.31658 14.5001 5.83333V0.875C14.5001 0.391751 14.1083 0 13.6251 0H8.66672Z"
                    fill="#0055DE"
                  />
                </svg>
              </div>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

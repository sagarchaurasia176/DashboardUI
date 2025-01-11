import React, { useEffect, useState, useRef } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { downloadReceipt } from "../utils/download-receipt";
import { HiDownload } from "react-icons/hi";

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
        values="5;0;5"
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
  const receiptRef = useRef<HTMLDivElement | null>(null);

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
      <div className="w-fit border-2 px-2 rounded-lg">
        <div ref={receiptRef} className="w-fit">
          <div id="status-icon" className="flex justify-center">
            {
              STATUS_CONTENT_MAP[
                paymentDetails.status as keyof typeof STATUS_CONTENT_MAP
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
            <div className="border rounded-lg bg-gray-200 flex flex-col gap-2 px-4 mt-8 text-lg">
              <div className="flex justify-between py-2">
                <span>Amount</span>
                <span>${paymentDetails.amount}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Status</span>
                <span>{paymentDetails.status}</span>
              </div>
              <div className="flex justify-between py-2 gap-4">
                <span>Id</span>
                <span className="text-md">{paymentDetails.intentId}</span>
              </div>
              <hr className="border-t-1 border-gray-400 mt-4" />
            </div>
          )}
        </div>

        {paymentDetails.intentId && (
          <div className="flex flex-col justify-center items-center gap-4">
            {/*TODO remove later */}
            <a
              href={`https://dashboard.stripe.com/payments/${paymentDetails.intentId}`}
              id="view-details"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-3"
            >
              View details
            </a>

            <button
              onClick={() =>
                downloadReceipt({
                  element: receiptRef.current,
                  fileName: "receipt.pdf",
                })
              }
              className="mb-2 text-blue-600"
            >
              <div className="flex items-center gap-2 text-lg">
                Click here to download receipt <HiDownload />
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

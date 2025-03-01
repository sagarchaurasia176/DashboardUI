import React, { useEffect, useState, useRef } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { downloadReceipt } from "../utils/download-receipt";
import { HiDownload } from "react-icons/hi";
import { BACKEND_URL } from "../../lib/vars";
import { useGlobalContext } from "../../ThemeContext";
import { STATUS_CONTENT_MAP } from "../utils/payment-status-icon";

interface paymentDetailsProps {
  status: string;
  intentId: string | null;
  amount: number | null;
  productURL: string | null;
}

interface event {
  userId: string;
  msg: string;
  productURL: string;
}

export default function CompletePage() {
  const { clientSecret } = useGlobalContext();
  const [paymentDetails, setPaymentDetails] = useState<paymentDetailsProps>({
    status: "processing",
    intentId: null,
    amount: null,
    productURL: null,
  });
  const [event, setEvent] = useState<event | null>(null);

  const stripe = useStripe();
  const receiptRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

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
        // amount: cents to dollars
        amount: paymentIntent.amount / 100,
        intentId: paymentIntent.id,
      }));
    });
  }, [stripe]);

  useEffect(() => {
    const sse = new EventSource(`${BACKEND_URL}/api/v1/payment/events`, {
      withCredentials: true,
    });

    sse.addEventListener("message", (event) => {
      try {
        console.log(event);
        const data = JSON.parse(event.data);
        setEvent(data);
      } catch (error) {
        console.log("Error parsing SSE data:", error);
      }
    });
    sse.onerror = (error) => {
      console.error("SSE connection error:", error);
      sse?.close();
    };
  }, []);

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
          <div className="flex flex-col items-center pb-2 mt-4">
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
            {event?.productURL && (
              <div className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-700">
                <a href={event.productURL}>Download ZIP</a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

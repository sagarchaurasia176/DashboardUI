import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "../shadcn/hooks/use-toast";
import { currencyConvert } from "../utils/currency-convert";
import { BACKEND_URL } from "../../lib/vars";

interface Template {
  productId: string;
  name: string;
  price: number | null;
  image: string;
  description: string;
  previewSite: string;
}
interface PaymentPageProps {
  setClientSecret: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Templates = ({ setClientSecret }: PaymentPageProps) => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<Template[]>([
    {
      productId: "",
      name: "",
      price: null,
      image: "",
      description: "",
      previewSite: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    try {
    } catch (error) {
      console.log(error);
    }
    const fetchTemplates = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/v1/product/getAllProducts`
        );

        const updatedTemplates = await Promise.all(
          data.map(async (template: any) => {
            const {
              _id: productId,
              name,
              price,
              image,
              description,
              previewSite,
            } = template;

            let priceInINR: number | null = null;

            try {
              priceInINR = (await currencyConvert({ amount: price })) ?? null;
            } catch (error) {
              console.error("Failed to convert price in INR, API limit", error);
            }

            return {
              productId,
              name,
              price: priceInINR || null,
              image,
              description,
              previewSite,
            };
          })
        );
        setTemplates(updatedTemplates);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTemplates();
  }, []);

  const handlePay = async (productId: string) => {
    const user = localStorage.getItem("user");
    if (!user) {
      console.log("No user");
      toast({
        variant: "destructive",
        title: "Auth failed",
        description: "Sign In to buy templates",
      });
      return;
    } else {
      const paymentResponse = await axios({
        method: "POST",
        url: `${BACKEND_URL}/api/v1/payment/checkout`,
        data: {
          items: [{ id: productId }],
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
      localStorage.setItem("productId", productId);
      navigate(`/checkout`);
    }
  };

  return (
    <div className="bg-slate-950 w-full min-h-screen overflow-hidden">
      <Navbar />
      {/* TODO skeleton */}
      {isLoading && <div>Loading ...</div>}
      {templates.length === 0 && <div>Loading </div>}
      {templates.map((template, index) => {
        const { productId, name, price, image, description, previewSite } =
          template;
        return (
          <div key={index} className="h-screen">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-12 text-white"
            >
              <h1 className="text-7xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">
                {name}
              </h1>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl text-gray-300 mt-6 block"
              >
                {description}
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
                  {name}
                </motion.h2>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    // TODO type check here
                    onClick={() => handlePay(productId)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold 
                hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    {/* TODO make this dynamic */}
                    Buy now &#8377;{price}
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={previewSite}
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
                  src={image}
                  alt="Template Preview"
                  className="rounded-lg shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Templates;

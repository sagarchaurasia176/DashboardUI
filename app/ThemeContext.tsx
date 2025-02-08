import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  clientSecret: string | null;
  user: string | null;
  product: string | null;
  setClientSecret: (secret: string) => void;
  setUser: (user: string) => void;
  setProduct: (productId: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clientSecret, setClientSecret] = useState<string | null>(() =>
    sessionStorage.getItem("clientSecret")
  );

  const [user, setUser] = useState<string | null>(null);
  const [product, setProduct] = useState<string | null>(() =>
    sessionStorage.getItem("product")
  );

  useEffect(() => {
    if (clientSecret) {
      sessionStorage.setItem("clientSecret", clientSecret);
    }
    if (product) {
      sessionStorage.setItem("product", product);
    }
  }, [clientSecret]);
  return (
    <ThemeContext.Provider
      value={{
        clientSecret,
        user,
        product,
        setClientSecret,
        setUser,
        setProduct,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};

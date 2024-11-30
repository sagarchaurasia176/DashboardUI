import React, { createContext, useState, ReactNode } from "react";

// Define the types for the context values
interface GlobalStateContextType {
  DashboardComponentsRenderToRightSide: string;
  setComponentsToRightSide: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context with default values
export const GlobalState = createContext <GlobalStateContextType | undefined>(undefined);

interface GlobalStateManageProps {
  children: ReactNode;
}

// this is the function here , which passed into the main.tsx file
export const GlobalStateManage = ({ children }: GlobalStateManageProps) => {
  const [DashboardComponentsRenderToRightSide, setComponentsToRightSide] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
 


  const values: GlobalStateContextType = {
    DashboardComponentsRenderToRightSide,
    setComponentsToRightSide,
    loading,
    setLoading,
  };

  return (
    <GlobalState.Provider value={values}>
      {children} {/* Render the children passed into the provider */}
    </GlobalState.Provider>
  );
};

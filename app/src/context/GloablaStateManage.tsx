import BioMainsh from "../playground/DeveloperBio/BioMainsh";
import React, { createContext, useState, ReactNode } from "react";


// Define the types for the context values
interface GlobalStateContextType {
  DashboardComponentsRenderToRightSide: string;
  setComponentsToRightSide: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  ComponentsRenderedToTheRightSideInDashBoard: (componentName: string) => void;
  componentMapping: { [key: string]: JSX.Element }; 
}

// Create context with default values
export const GlobalState = createContext<GlobalStateContextType | undefined>(
  undefined
);

interface GlobalStateManageProps {
  children: ReactNode;
}

// this is the function here , which passed into the main.tsx file
export const GlobalStateManage = ({ children }: GlobalStateManageProps) => {
  const [DashboardComponentsRenderToRightSide, setComponentsToRightSide] =
    useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Component mapping
  const componentMapping: { [key: string]: JSX.Element } = {
    BioManish: <BioMainsh />,
    // Add other components here as needed
  };
  
  const ComponentsRenderedToTheRightSideInDashBoard=(componentName: string)=>{
    setComponentsToRightSide(componentName);
  };

  // values 
  const values: GlobalStateContextType = {
    DashboardComponentsRenderToRightSide,
    setComponentsToRightSide,
    loading,
    componentMapping,
    setLoading,
    ComponentsRenderedToTheRightSideInDashBoard
  };

  return (
    <GlobalState.Provider value={values}>
      {children} {/* Render the children passed into the provider */}
    </GlobalState.Provider>
  );
};

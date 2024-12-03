import ButtonCodeSnippet from "../../playground/button/buttonCodeSnippet";
import React from "react";
import Sidebar from "../../components/Sidebar";
import ComponentShowcase from "../../components/ComponentShowcase";

const ButtonPage = () => {
  return (
    <div
      className="flex bg-black h-screen
    "
    >
      <Sidebar />
      <ComponentShowcase
        code={ButtonCodeSnippet.code}
        name={ButtonCodeSnippet.name}
        description={ButtonCodeSnippet.description}
      />
    </div>
  );
};

export default ButtonPage;

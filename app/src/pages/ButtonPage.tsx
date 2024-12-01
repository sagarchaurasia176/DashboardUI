import { CodePreview } from "../components/CodePreview";
import ButtonCodeSnippet from "../playground/button/buttonCodeSnippet";
import React from "react";
import Sidebar from "../components/Sidebar";

const ButtonPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <CodePreview code={ButtonCodeSnippet} />
    </div>
  );
};

export default ButtonPage;

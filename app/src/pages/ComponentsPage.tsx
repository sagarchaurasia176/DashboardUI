import React from "react";
import { CodePreview } from "../components/CodePreview";
import ButtonCodeSnippet from "../playground/button/buttonCodeSnippet";
import CardCodeSnippet from "../playground/card/cardCodeSnippet";
import Sidebar from "../components/Sidebar";

const ComponentsPage = () => {
  return (
    <div className="flex gap-20">
      <Sidebar />
      <div className="mt-20">
        <CodePreview code={ButtonCodeSnippet} />
        <CodePreview code={CardCodeSnippet} />
      </div>
    </div>
  );
};

export default ComponentsPage;

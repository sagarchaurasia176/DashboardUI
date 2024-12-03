import React from "react";
import { CodePreview } from "../components/CodePreview";
import ButtonCodeSnippet from "../playground/button/buttonCodeSnippet";
import CardCodeSnippet from "../playground/card/cardCodeSnippet";
import Sidebar from "../components/Sidebar";

const ComponentsPage = () => {
  return (
    <div className="flex gap-20 bg-black h-screen text-white">
      <Sidebar />
      <div className="mt-32">
        <h2 className="font-sans text-2xl font-extrabold py-2">Installation</h2>
        <div className="px-6 py-2">
          <ul className="list-disc">
            <li>Configure Tailwind</li>
            <li>Install react icons</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;

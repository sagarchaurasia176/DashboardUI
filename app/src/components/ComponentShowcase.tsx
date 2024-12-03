import React, { useState } from "react";
import { CodePreview } from "../components/CodePreview";

type ComponentShowcaseProps = {
  code: string;
  name: string;
  description: string;
};

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  code,
  name,
  description,
}) => {
  const [userView, setUserView] = useState<string | undefined>();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyButton = () => {};
  console.log(code);

  return (
    <div>
      <div className="bg-black text-white mt-24 ml-8">
        <h2 className="text-xl mb-3">{name}</h2>
        <p className="mx-1 mb-10">{description}</p>
      </div>
      <div className="border border-gray-600 text-white ml-10 rounded-lg">
        <div className="w-[900px]">
          <div className="flex place-content-between">
            <div className="flex">
              <button
                className="px-4 hover:bg-gray-900"
                onClick={() => setUserView("Code")}
              >
                Code
              </button>
              <button
                className="px-4 hover:bg-gray-900"
                onClick={() => setUserView("Preview")}
              >
                Preview
              </button>
            </div>
            <button
              data-copy-to-clipboard-target="npm-install-copy-button"
              data-tooltip-target="tooltip-copy-npm-install-copy-button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-lg p-2 inline-flex items-center justify-center my-2 mx-2"
              onClick={() => {
                navigator.clipboard.writeText(code);
                setIsCopied(true);
              }}
            >
              <span id="default-icon">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <span
                id="success-icon"
                className="hidden inline-flex items-center"
              >
                <svg
                  className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="h-[600px] overflow-x-auto">
            {userView === "Preview" ? (
              // Add logic to embed HTML for previewing component
              <p className="mx-10 mb-10">Preview Content</p>
            ) : (
              <CodePreview code={code} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;

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


  return (
    <div className="mt-[8rem] ml-[1rem] p-3 w-full ">

      {/* Imagine this is a card  */}
      <div className="">

      <div className="text-white inline">
        <h2 className="text-md font-sans font-bold underline">{name}</h2>
        <p className="text-md">{description}</p>
      </div>
<br />
      {/* code preview logic here */}
      <div className="text-white rounded-lg">
        <div className=" w-full">
          <div className="flex place-content-between">
            <div className="flex justify-start">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center hover:bg-blue-700"
                onClick={() => setUserView("Code")}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M12 4h.01M4 12h.01M20 12h.01M4.93 4.93h.01M19.07 4.93h.01M4.93 19.07h.01M19.07 19.07h.01"
                  />
                </svg>
                Code
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center hover:bg-green-700"
                onClick={() => setUserView("Preview")}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553 4.553a1 1 0 01-1.414 1.414L15 12.828l-3.293 3.293a1 1 0 01-1.414-1.414L13 10H9a1 1 0 010-2h6a1 1 0 010 2z"
                  />
                </svg>
                Preview
              </button>
            </div>
            <button
              data-copy-to-clipboard-target="npm-install-copy-button"
              data-tooltip-target="tooltip-copy-npm-install-copy-button"
              className="px-4 py-2 bg-yellow-500 text-white rounded-md flex items-center hover:bg-yellow-700"
              onClick={() => {
                navigator.clipboard.writeText(code);
                setIsCopied(true);
              }}
            >
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8m8 4H8m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="overflow-y-auto h-[60vh]">
            {userView === "Preview" ? (
              // Add logic to embed HTML for previewing component
              <p className="">Preview Content</p>
            ) : (
              <CodePreview code={code} />
            )}
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default ComponentShowcase;

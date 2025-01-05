import React, { useState } from "react";
import { CodePreview } from "../components/CodePreview";
import PreviewComponent from "./PreviewComponent";
import toast from "react-hot-toast";

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

  const handleCopy = () => {
    // copy code to clipboard
    navigator.clipboard.writeText(code);
    let toastLoader = toast.loading("copied...");
    setIsCopied(true);
    //automaitcally reset evry 2sec
    setTimeout(() => {
      toast.dismiss(toastLoader);
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="pt-4 w-full ">
      {/* Imagine this is a card  */}
      <div className="">
        <div className="text-white inline">
          <h2 className="text-2xl font-sans font-bold py-3">{name}</h2>
          <p className="text-md">{description}</p>
        </div>
        <br />
        {/* code preview logic here */}
        <div className="text-white rounded-lg">
          <div className=" w-full">
            <div className="flex place-content-between mr-8">
              <div className="flex gap-4">
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
                onClick={handleCopy}
              >
                {isCopied ? (
                  <span id="success-icon" className="inline-flex items-center">
                    <svg
                      className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span className="ml-2">Copied!</span>
                  </span>
                ) : (
                  <span id="default-icon" className="inline-flex items-center">
                    <svg
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                    </svg>
                    <span className="ml-2">Copy</span>
                  </span>
                )}
              </button>
            </div>
            <br />

            <div className="overflow-y-auto  max-h-[25rem] lg:h-auto md:h-auto">
              {userView === "Preview" ? (
                // Add logic to embed HTML for previewing component
                <PreviewComponent ComponentName={name} />
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

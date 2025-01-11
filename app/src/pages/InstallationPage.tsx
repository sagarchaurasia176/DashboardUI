import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ComponentsNav from "./ComponentsNav";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
const InstallationPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = (code: string) =>   {
    navigator.clipboard.writeText(code);
    const toastLoader = toast.loading("Copying...");
    setIsCopied(true);
    setTimeout(() => {
      toast.dismiss(toastLoader);
      toast.success("Copied to clipboard!");
      setIsCopied(false);
    }, 1000);
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Which frameworks are supported?",
      answer: "You can use any framework that supports React, including Next.js.",
    },
    {
      question: "Can I use this in my project?",
      answer:
        "Yes, you are free to use this for personal and commercial projects. No attribution required, but I'd love to hear about what you build!",
    },
  ];

  return (
    <div className="flex flex-row w-full bg-black text-white min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <ComponentsNav />
        <div className="px-12 py-6">
          <h2 className="font-sans text-2xl font-extrabold mb-4">Installation</h2>

          <div className="text-lg mb-4">
            <ul className="list-disc pl-5">
              <li>Configure Tailwind CSS with Vite</li>
            </ul>
          </div>

          {/* Command to create the project */}
          <div className="bg-slate-700 rounded-md p-4 mb-6 flex justify-between items-center">
            <code className="font-mono text-lg">
              npm create vite@latest my-project -- --template react
            </code>
            <button
              onClick={() => handleCopy("npm create vite@latest my-project -- --template react")}
              className="ml-2 bg-stone-950 text-white px-3 py-1 rounded-md hover:bg-blue-700"

              // className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            > 
            <FaCopy/>
            </button>
          </div>

          {/* Install Tailwind CSS */}
          <p className="mb-2">Install Tailwind CSS and its dependencies:</p>
          <div className="bg-slate-800 p-4 rounded-md mb-6 flex justify-between items-center">
            <code className="font-mono text-lg">
              npm install -D tailwindcss postcss autoprefixer
            </code>
            <button
              onClick={() =>
                handleCopy("npm install -D tailwindcss postcss autoprefixer")
              }
              className="ml-2 bg-stone-950 text-white px-3 py-1 rounded-md hover:bg-blue-700"

              // className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
            <FaCopy/>
              
            </button>
          </div>
          <div className="bg-slate-800 p-4 rounded-md mb-6 flex justify-between items-center">
            <code className="font-mono text-lg">npx tailwindcss init -p</code>
            <button
              onClick={() => handleCopy("npx tailwindcss init -p")}
              className="ml-2 bg-stone-950 text-white px-3 py-1 rounded-md hover:bg-blue-700"

              // className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
            <FaCopy/>
             
            </button>
          </div>

          {/* Configure Tailwind paths */}
          <p className="mb-2">Configure your template paths in tailwind.config.js:</p>
          <div className="bg-slate-800 p-4 rounded-md mb-6">
            <pre className="bg-slate-900 p-3 rounded-md overflow-x-auto flex justify-between items-center">
              <code className="font-mono text-sm">
                {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
              </code>
              <button
                onClick={() =>
                  handleCopy(`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`)
                }
                className="ml-2 bg-stone-950 text-white px-3 py-1 rounded-md hover:bg-blue-700"
              >
            <FaCopy/>
                
              </button>
            </pre>
          </div>

          {/* Add Tailwind directives to CSS */}
          <p className="mb-2">Add the Tailwind directives to your CSS:</p>
          <div className="bg-slate-800 p-4 rounded-md mb-6">
            <pre className="bg-slate-900 p-3 rounded-md overflow-x-auto flex justify-between items-center">
              <code className="font-mono text-sm">
                {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
              </code>
              <button
                onClick={() =>
                  handleCopy(`@tailwind base;\n@tailwind components;\n@tailwind utilities;`)
                }
                className="ml-2 bg-stone-950 text-white px-3 py-1 rounded-md hover:bg-blue-700"
               
              > 
            <FaCopy/>
              
               {/* Copy */}
              </button>
            </pre>
          </div>

          {/* Start build process */}
          <div className="bg-slate-800 p-4 rounded-md mb-6 flex justify-between items-center">
            <code className="font-mono text-lg">npm run dev</code>
            <button
              onClick={() => handleCopy("npm run dev")}
              className="ml-2 bg-stone-950 text-white px-3 py-1 rounded-md hover:bg-blue-700"

              // className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
            <FaCopy/>
            
            </button>
          </div>

          {/* FAQ Section */}
          <h1 className="font-sans text-4xl font-bold mb-4">FAQ</h1>
          <div className="faq-accordion space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item border-b border-slate-700 pb-4">
                <button
                  className="w-full text-left font-sans text-xl font-bold focus:outline-none flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span
                    className={`transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="faq-answer bg-slate-700 p-4 mt-2 rounded-md transition-opacity">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;

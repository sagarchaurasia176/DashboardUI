import Sidebar from "../components/Sidebar";
import ComponentsNav from "./ComponentsNav";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const InstallationPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Which frameworks are supported ?",
      answer: " You can use any framework that supports React. Next.js"
    },
    {
      question: "Can I use this in my project ?",
      answer: " Yes. Free to use for personal and commercial projects. No attribution required. But hey, let me know if you do. I'd love to see what you build. "
    }
  ];

  return (
    <div className="flex flex-row w-full bg-black text-white">
      <Sidebar />
      <div className="w-full">
        <ComponentsNav />
        <div className="px-12 py-2">
          <h2 className="font-sans text-2xl font-extrabold py-1">
            Installation
          </h2>

          <div className="px-2 py-2 text-lg">
            <ul className="list-disc">
              <li>Configure Tailwind CSS with Vite</li>
            </ul>
          </div>

          {/* Command to create the project */}
          <div className="bg-slate-700 rounded-md font-sans text-xl font-bold py-2 p-2">
            <code>npm create vite@latest my-project -- --template react</code>
          </div>

          <br />
          <div className="bg-slate-700 p-4 rounded-md">
            <ul className="list-disc">
              Install Tailwind CSS and its dependencies:
            </ul>
          </div>

          <br />

          {/* Install Tailwind CSS */}
          <div className="bg-slate-800 p-3 rounded-md">
            <br />
            <code>npm install -D tailwindcss postcss autoprefixer</code>
            <br />
            <code>npx tailwindcss init -p</code>
          </div>

          <br />

          {/* Configure Tailwind paths */}
          <div className="bg-slate-800 p-3 rounded-md">
            <code>Configure your template paths in tailwind.config.js:</code>
            <br />
            <code>
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
}
`}
            </code>
          </div>

          <br />

          {/* Add Tailwind directives to CSS */}
          <div className="bg-slate-800 p-3 rounded-md">
            <code>Add the Tailwind directives to your CSS:</code>
            <br />
            <code>
              {`
@tailwind base;
@tailwind components;
@tailwind utilities;
`}
            </code>
          </div>

          <br />

          {/* Start build process */}
          <div className="bg-slate-800 p-3 rounded-md">
            <code>Start your build process:</code>
            <br />
            <code>npm run dev</code>
          </div>

          <br />
          <h1 className="font-sans text-4xl font-bold py-2">
            FAQ
            <hr />
          </h1>

          {/* FAQ Accordion */}
          <div className="faq-accordion flex-wrap ">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question font-sans text-sm   justify-normal  lg:text-xl  font-bold "
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}    
                </button>

                {activeIndex === index && (
                  <div className="faq-answer bg-slate-700 p-3  rounded-md">
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

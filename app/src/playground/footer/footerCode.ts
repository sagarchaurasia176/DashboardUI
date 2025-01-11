const footerCode = {
  name: "Footer",
  code: `
  import React from "react";
  const Footer: React.FC = () => {
    return (
  
   <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
      <div className="mt-4">
        <a
          href="#"
          className="text-gray-400 hover:text-white mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        |
        <a
          href="#"
          className="text-gray-400 hover:text-white mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
    );
  };
  
  export default Footer;
    `,
  description:
    "A footer component containg social links, and a suggestion form",
};

export default footerCode;

const footerCode = {
  name: "Footer",
  code: `
    import React from "react";
    const Footer= () => {
     <footer class="bg-gray-800 text-white py-6">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
        <div class="mt-4">
          <a
            href="#"
            class="text-gray-400 hover\\:text-white mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          |
          <a
            href="#"
            class="text-gray-400 hover\\:text-white mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
    };
    
    export default Footer;
      `,
  description:
    "A footer component containg social links, and a suggestion form",
};

export default footerCode;

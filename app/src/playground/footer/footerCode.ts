const footerCode = {
  name: "Footer",
  code: `
  import { FaGithub } from "react-icons/fa";
  import { CiLinkedin } from "react-icons/ci";
  import { BsTwitterX } from "react-icons/bs";
  import React from "react";
  
  const Footer: React.FC = () => {
    return (
      <footer className="flex gap-96">
        <div>
          <div className="items-center">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
  
          <div className="flex text-xl gap-4 pt-6">
            <FaGithub />
            <CiLinkedin />
            <BsTwitterX />
          </div>
        </div>
  
        <form className="flex flex-col gap-5 w-fit">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mesage">Message</label>
            <textarea placeholder="Message..." />
          </div>
          <button className="bg-blue-600 px-2 py-1 rounded-lg">Submit</button>
        </form>
      </footer>
    );
  };
  
  export default Footer;
    `,
  description:
    "A footer component containg social links, and a suggestion form",
};

export default footerCode;

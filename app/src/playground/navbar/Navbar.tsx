import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center gap-64 bg-gray-600 py-1">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidyDz4vUFPC_pC4WT44M-8OE1iyO2TcSr0Q&s"
        alt="logo"
        className="h-12 w-20"
      />
      <nav>
        <ul className="flex gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

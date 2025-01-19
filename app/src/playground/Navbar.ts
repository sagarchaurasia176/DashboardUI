const navbarCode = {
  name: "Navbar",
  code: `
  import React from "react";
  
  const Navbar = () => {
      <header class="flex items-center gap-64 bg-gray-600 py-1">
        <img
          src="https://t4.ftcdn.net/jpg/03/96/08/91/240_F_396089127_9TGPFWPzjGPP7E0sIFLGcCA4Gdz9lnwk.jpg"
          alt="logo"
          class="h-12 w-20 mx-2"
        ></img>
        <nav>
          <ul class="flex gap-10">
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
  };
  
  export default Navbar;
      `,
  description:
    "A customizable navbar component containing a logo and nav-links",
};

export default navbarCode;

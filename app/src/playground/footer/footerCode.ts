const FooterCode = {
  name: "Footer",
  code: `
  import { FaGithub } from "react-icons/fa";
  import { CiLinkedin } from "react-icons/ci";
  import { BsTwitterX } from "react-icons/bs";

  <footer>
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Servuces</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/aboutus">About Us</a></li>
      </ul>
    </div>

      <div className="flex">
        <FaGithub />
        <CiLinkedin />
        <BsTwitterX />
      </div>

      <form>
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Message..." />
        <button>Submit</button>
      </form>

  </footer>
    `,
  description:
    "A footer component containg social links, and a suggestion form",
};

export default FooterCode;

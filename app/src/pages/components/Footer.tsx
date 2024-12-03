import ComponentShowcase from "../../components/ComponentShowcase";
import Sidebar from "../../components/Sidebar";
import FooterCode from "../../playground/footer/footerCode";

const Footer = () => {
  return (
    <div className="flex bg-black h-screen">
      <Sidebar />
      <ComponentShowcase
        code={FooterCode.code}
        name={FooterCode.name}
        description={FooterCode.description}
      />
    </div>
  );
};

export default Footer;

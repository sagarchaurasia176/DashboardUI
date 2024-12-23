import ComponentShowcase from "../../components/ComponentShowcase";
import Sidebar from "../../components/Sidebar";
import NavbarCode from "../../playground/navbar/navbarCode";

const NavbarPage = () => {
  return (
    <div className="flex bg-black h-screen">
      <Sidebar />
      <ComponentShowcase
        code={NavbarCode.code}
        name={NavbarCode.name}
        description={NavbarCode.description}
      />
    </div>
  );
};

export default NavbarPage;

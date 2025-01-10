import ComponentShowcase from "../components/ComponentShowcase";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { codeMapping } from "../utils/code_mapping";

const CommonPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const comp = queryParams.get("component");
  console.log(comp);

  if (!comp) {
    console.log("No component");
    return;
  }
  const component = codeMapping[comp as keyof typeof codeMapping];
  console.log(component.name);

  return (
    <section>
      <Navbar />
      <div className="flex flex-row bg-gray-900 gap-20">
        <Sidebar />
        <div className="transition duration-500 ease-in-out w-full mt-0">
          <ComponentShowcase
            name={component.name}
            code={component.code}
            description={component.description}
          />
        </div>
      </div>
    </section>
  );
};

export default CommonPage;

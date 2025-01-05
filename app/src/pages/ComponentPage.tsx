import ComponentShowcase from "../components/ComponentShowcase";
import Sidebar from "../components/Sidebar";
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
    <div className="flex bg-black h-screen">
      <Sidebar />
      <ComponentShowcase
        name={component.name}
        code={component.code}
        description={component.description}
      />
    </div>
  );
};

export default CommonPage;

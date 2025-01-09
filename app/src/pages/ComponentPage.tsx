import ComponentShowcase from "../components/ComponentShowcase";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { codeMapping } from "../utils/code_mapping";
import ComponentsNav from "./ComponentsNav";

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
  document.title = "Dashboard_UI | Components ";

  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full lg:w-[90%] bg-slate-950 h-full">
          {/* Make the nav fixed inside this container */}
          <div className="sticky top-0 z-50">
            <ComponentsNav />
          </div>

          {/* Component showcase */}
          <ComponentShowcase
            name={component.name}
            code={component.code}
            description={component.description}
          />
        </div>
      </div>
    </>
  );
};

export default CommonPage;

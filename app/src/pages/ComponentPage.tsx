import ComponentShowcase from "../components/ComponentShowcase";
import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { codeMapping } from "../utils/code_mapping";
import ComponentsNav from "../components/ComponentsNav";

export default function ComponentPage() {
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
    <section>
      <div className=" bg-gray-900 flex flex-row">
        <Sidebar />
        <div className="w-full h-full">
          <div className="sticky top-0 z-50 ">
            <ComponentsNav />
          </div>
          <ComponentShowcase
            name={component.name}
            code={component.code}
            description={component.description}
          />
        </div>
      </div>
    </section>
  );
}

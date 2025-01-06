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
    <>
    <div className="flex flex-row gap-8   bg-black sm:w-auto">
    <div className=" w-[20%]">
      <Sidebar />
    </div>
    <div className=" w-[90%] transition duration-500 ease-in-out hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
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

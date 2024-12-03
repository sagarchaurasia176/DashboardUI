import ComponentShowcase from "../../components/ComponentShowcase";
import Sidebar from "../../components/Sidebar";
import barChartCode from "../../playground/barGraph/barChartCode";

const Barchart = () => {
  return (
    <div className="flex bg-black h-screen">
      <Sidebar />
      <ComponentShowcase
        code={barChartCode.code}
        name={barChartCode.name}
        description={barChartCode.description}
      />
    </div>
  );
};

export default Barchart;

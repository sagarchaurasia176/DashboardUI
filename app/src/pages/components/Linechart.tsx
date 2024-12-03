import ComponentShowcase from "../../components/ComponentShowcase";
import Sidebar from "../../components/Sidebar";
import lineChartCode from "../../playground/lineChart/lineChartCode";

const Linechart = () => {
  return (
    <div className="flex bg-black h-screen">
      <Sidebar />
      <ComponentShowcase
        code={lineChartCode.code}
        name={lineChartCode.name}
        description={lineChartCode.description}
      />
    </div>
  );
};

export default Linechart;

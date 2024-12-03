import Sidebar from "../../components/Sidebar";
import ComponentShowcase from "../../components/ComponentShowcase";
import pieChartCode from "../../playground/pieChart/pieChartCode";

const PieChart = () => {
  return (
    <div className="flex bg-black h-screen">
      <Sidebar />
      <ComponentShowcase
        code={pieChartCode.code}
        name={pieChartCode.name}
        description={pieChartCode.description}
      />
    </div>
  );
};

export default PieChart;

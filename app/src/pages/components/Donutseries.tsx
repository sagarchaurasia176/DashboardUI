import ComponentShowcase from "../../components/ComponentShowcase";
import Sidebar from "../../components/Sidebar";
import donutSeriesCode from "../../playground/donutSeries/donutSeriesCode";

const Donut = () => {
  return (
    <div className="flex bg-black h-screen">
      <Sidebar />
      <ComponentShowcase
        code={donutSeriesCode.code}
        name={donutSeriesCode.name}
        description={donutSeriesCode.description}
      />
    </div>
  );
};

export default Donut;

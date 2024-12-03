import Sidebar from "../../components/Sidebar";
import ComponentShowcase from "../../components/ComponentShowcase";
import scatterSeriesCode from "../../playground/scatterSeries/scatterSeriesCode";

const Scatterseries = () => {
  return (
    <div className="flex bg-black h-screen">
      <Sidebar />
      <ComponentShowcase
        code={scatterSeriesCode.code}
        name={scatterSeriesCode.name}
        description={scatterSeriesCode.description}
      />
    </div>
  );
};

export default Scatterseries;

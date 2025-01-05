// import Sidebar from "./Sidebar";
// import { MemoryRouter } from "react-router-dom";
// import scatterSeriesCode from "../playground/scatterSeries/scatterSeriesCode";
import ScatterChart from "../playground/scatter/ScatterSeries";

export default {
  title: "Scatter Series",
  component: ScatterChart,
};

// const codeLength = scatterSeriesCode.code.length;
// const componentCode = scatterSeriesCode.code.substring(1, codeLength - 1);

// const Component = () => componentCode;

export const Default = () => <ScatterChart />;

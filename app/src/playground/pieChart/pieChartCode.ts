const pieChartCode = {
  name: "Pie Chart",
  code: `
  import { AgCharts } from "ag-charts-react";

  const PieChart = () => {
    const [options, setOptions] = useState({
      data: getData(),
      title: {
        text: "Portfolio Composition",
      },
      subtitle: {
        text: "Showing Annual Yield",
      },
      series: [
        {
          type: "pie",
          angleKey: "amount",
          radiusKey: "yield",
          legendItemKey: "asset",
        },
      ],
    });

    return <AgCharts options={options} />;
  };
  `,
  description:
    "A graph depicting data in pie form. It can be customized as per requirement",
};

export default pieChartCode;

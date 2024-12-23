const pieChartCode = {
  name: "Pie Chart",
  code: `
  import { AgCharts } from "ag-charts-react";
  import { useState } from "react";

  const PieChart: React.FC = () => {
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

  const getData = () => [
    {
      asset: "Stocks",
      amount: 50000,
      yield: 10,
    },
    {
      asset: "Bonds",
      amount: 30000,
      yield: 5,
    },
    {
      asset: "Real Estate",
      amount: 20000,
      yield: 6,
    },
    {
      asset: "Cryptocurrency",
      amount: 15000,
      yield: 15,
    },
    {
      asset: "Commodities",
      amount: 10000,
      yield: 8,
    },
  ];

  export default PieChart;
  `,
  description:
    "A graph depicting data in pie form. It can be customized as per requirement",
};

export default pieChartCode;

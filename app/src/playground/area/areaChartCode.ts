const areaChartCode = {
  name: "Area",
  code: `
  import React, { useState } from "react";
  import { createRoot } from "react-dom/client";
  import { AgCharts } from "ag-charts-react";
  import { AgChartOptions } from "ag-charts-community";
  import { getData } from "./data";

  const ChartExample = () => {
    const [options, setOptions] = useState<AgChartOptions>({
      title: {
        text: "Sales by Month",
      },
      data: getData(),
      series: [
        {
          type: "area",
          xKey: "month",
          yKey: "subscriptions",
          yName: "Subscriptions",
        },
        {
          type: "area",
          xKey: "month",
          yKey: "services",
          yName: "Services",
        },
        {
          type: "area",
          xKey: "month",
          yKey: "products",
          yName: "Products",
        },
      ],
    });

    return <AgCharts options={options} />;
  };
  `,
  description: "A chart depicting data in area",
};

export default areaChartCode;

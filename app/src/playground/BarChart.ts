const barChartCode = {
  name: "Bar Chart",
  code: `
    import { AgCharts } from "ag-charts-react";
    import { useState } from "react";
  
    const BarChart = () => {
      const [options, setOptions] = useState({
        data: [
          { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
          { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
          { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
          { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
          { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
          { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
        ],
        series: [{ type: "bar", xKey: "month", yKey: "iceCreamSales" }],
      });
  
      return <AgCharts options={options} />;
      export default BarChart;
    };
    `,
  description:
    "A graph depicting data in bar blocks. It can be customized as per needs.",
};

export default barChartCode;

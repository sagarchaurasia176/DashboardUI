const boxPlotCode = {
  name: "Box Plot Series",
  code: `
  import { useState } from "react";
  import { AgCharts } from "ag-charts-react";
    
  const BoxPlot: React.FC = () => {
  const [options, setOptions] = useState({
        title: {
          text: "HR Analytics",
        },
        subtitle: {
          text: "Salary Distribution by Department",
        },
        data: [
          {
            department: "Sales",
            min: 1052,
            q1: 4465,
            median: 5765,
            q3: 8834,
            max: 14852,
          },
          {
            department: "R&D",
            min: 1009,
            q1: 2741,
            median: 4377,
            q3: 7725,
            max: 14814,
          },
          {
            department: "HR",
            min: 1555,
            q1: 2696,
            median: 4071,
            q3: 9756,
            max: 19717,
          },
        ],
        series: [
          {
            type: "box-plot",
            yName: "Employee Salaries",
            xKey: "department",
            minKey: "min",
            q1Key: "q1",
            medianKey: "median",
            q3Key: "q3",
            maxKey: "max",
          },
        ],
      });
    
      return <AgCharts options={options as any} />;
 };
    `,
  description:
    "A Box Plot Series, also known as a Box-and-Whisker Plot, visually summarises a dataset's distribution through its median and quartiles.",
};

export default boxPlotCode;

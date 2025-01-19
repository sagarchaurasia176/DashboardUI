const bubbleCode = {
  name: "Bubble Series",
  code: `
    import { useState } from "react";
    import { AgCharts } from "ag-charts-react";
    
    const BubbleSeries: React.FC = () => {
      const [options, setOptions] = useState({
        title: {
          text: "Weight vs Height",
        },
        subtitle: {
          text: "by gender",
        },
        series: [
          {
            type: "bubble",
            title: "Male",
            data: [
      { name: "John", height: 180, weight: 75 },
      { name: "Mike", height: 175, weight: 70 },
      { name: "David", height: 190, weight: 85 },
      { name: "Paul", height: 185, weight: 78 },
      { name: "Chris", height: 170, weight: 68 }
    ],
            xKey: "height",
            xName: "Height",
            yKey: "weight",
            yName: "Weight",
            sizeKey: "age",
            sizeName: "Age",
          },
          {
            type: "bubble",
            title: "Female",
            data: [
      { name: "Anna", height: 160, weight: 55 },
      { name: "Mary", height: 165, weight: 60 },
      { name: "Lisa", height: 155, weight: 50 },
      { name: "Sophia", height: 170, weight: 58 },
      { name: "Emma", height: 168, weight: 62 }
    ],
            xKey: "height",
            xName: "Height",
            yKey: "weight",
            yName: "Weight",
            sizeKey: "age",
            sizeName: "Age",
          },
        ],
        axes: [
          {
            type: "number",
            position: "bottom",
            title: {
              text: "Height",
            },
          },
          {
            type: "number",
            position: "left",
            title: {
              text: "Weight",
            },
          },
        ],
      });
    
      return <AgCharts options={options} />;
    };
    
    export default BubbleSeries;
    `,
  description:
    "A Bubble Series extends the Scatter Series by using the size of each marker to represent a third variable.",
};

export default bubbleCode;

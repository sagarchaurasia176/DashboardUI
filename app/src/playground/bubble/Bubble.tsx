import { useState } from "react";
import { AgCharts } from "ag-charts-react";

const maleHeightWeight = [
  { name: "John", height: 180, weight: 75 },
  { name: "Mike", height: 175, weight: 70 },
  { name: "David", height: 190, weight: 85 },
  { name: "Paul", height: 185, weight: 78 },
  { name: "Chris", height: 170, weight: 68 },
  { name: "James", height: 178, weight: 80 },
  { name: "Tom", height: 165, weight: 65 },
  { name: "Robert", height: 182, weight: 76 },
  { name: "Steven", height: 188, weight: 88 },
  { name: "Daniel", height: 173, weight: 72 },
  { name: "Brian", height: 176, weight: 74 },
  { name: "Kevin", height: 183, weight: 79 },
  { name: "Andrew", height: 177, weight: 73 },
  { name: "Lucas", height: 168, weight: 67 },
  { name: "Samuel", height: 179, weight: 78 },
  { name: "Mark", height: 181, weight: 82 },
  { name: "Joseph", height: 174, weight: 69 },
  { name: "Gary", height: 169, weight: 64 },
  { name: "Peter", height: 180, weight: 77 },
];

// Example female dataset
const femaleHeightWeight = [
  { name: "Anna", height: 160, weight: 55 },
  { name: "Mary", height: 165, weight: 60 },
  { name: "Lisa", height: 155, weight: 50 },
  { name: "Sophia", height: 170, weight: 58 },
  { name: "Emma", height: 168, weight: 62 },
  { name: "Olivia", height: 163, weight: 57 },
  { name: "Isabella", height: 172, weight: 63 },
  { name: "Ava", height: 158, weight: 52 },
  { name: "Charlotte", height: 175, weight: 65 },
  { name: "Amelia", height: 160, weight: 59 },
  { name: "Ella", height: 167, weight: 61 },
  { name: "Mia", height: 162, weight: 56 },
  { name: "Chloe", height: 169, weight: 64 },
  { name: "Harper", height: 174, weight: 66 },
  { name: "Evelyn", height: 161, weight: 53 },
  { name: "Grace", height: 176, weight: 68 },
  { name: "Zoey", height: 164, weight: 62 },
  { name: "Lily", height: 170, weight: 60 },
  { name: "Zara", height: 173, weight: 64 },
];

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
        data: maleHeightWeight,
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
        data: femaleHeightWeight,
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
        label: {
          formatter: (params) => {
            return params.value + "cm";
          },
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Weight",
        },
        label: {
          formatter: (params) => {
            return params.value + "kg";
          },
        },
      },
    ],
  });

  return <AgCharts options={options} />;
};

export default BubbleSeries;

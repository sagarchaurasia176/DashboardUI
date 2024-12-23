const lineChartCode = {
  name: "Line Chart",
  code: `
  import React, { useState, Fragment } from "react";
  import { AgCharts } from "ag-charts-react";
  import clone from "clone";
  
  const maleHeightWeight = [
    { name: "John", height: 175, weight: 70 },
    { name: "Michael", height: 180, weight: 80 },
    { name: "James", height: 165, weight: 65 },
    { name: "David", height: 170, weight: 72 },
    { name: "Chris", height: 178, weight: 77 },
  ];
  
  const femaleHeightWeight = [
    { name: "Emma", height: 160, weight: 55 },
    { name: "Sophia", height: 165, weight: 60 },
    { name: "Olivia", height: 170, weight: 62 },
    { name: "Ava", height: 155, weight: 50 },
    { name: "Isabella", height: 168, weight: 58 },
  ];
  
  const LineChart = () => {
    const [options, setOptions] = useState({
      title: {
        text: "Weight vs Height)",
      },
      subtitle: {
        text: "With Name Labels",
      },
      series: [
        {
          type: "scatter",
          title: "Male",
          data: maleHeightWeight,
          xKey: "height",
          xName: "Height",
          yKey: "weight",
          yName: "Weight",
          labelKey: "name",
          labelName: "Name",
          shape: "square",
          fill: "#e36f6ab5",
          stroke: "#9f4e4a",
          label: {
            enabled: true,
          },
        },
        {
          type: "scatter",
          title: "Female",
          data: femaleHeightWeight,
          xKey: "height",
          xName: "Height",
          yKey: "weight",
          yName: "Weight",
          labelKey: "name",
          labelName: "Name",
          fill: "#7b91deb5",
          stroke: "#56659b",
          label: { enabled: true },
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
  
    const updateFontSize = (event) => {
      const nextOptions = clone(options);
  
      var value = +event.target.value;
      nextOptions.series[0].label.fontSize = value;
      nextOptions.series[1].label.fontSize = value;
  
      document.getElementById("fontSizeSliderValue").innerHTML = String(value);
  
      setOptions(nextOptions);
    };
  
    return (
      <Fragment>
        <div className="toolbar">
          <div className="sliders">
            <label htmlFor="sliderInput">Label font size</label>
            <input
              type="range"
              id="sliderInput"
              min="8"
              max="30"
              defaultValue="12"
              step="1"
              onInput={(event) => updateFontSize(event)}
              onChange={(event) => updateFontSize(event)}
            />
            <span id="fontSizeSliderValue">12</span>
          </div>
        </div>
        <AgCharts options={options} />
      </Fragment>
    );
  };
  
  export default LineChart;
  `,
  description:
    "A graph depicting data in line-format. Many lines can be drawn and customized",
};

export default lineChartCode;

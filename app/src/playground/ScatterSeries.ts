const scatterSeriesCode = {
  name: "Scatter Series",
  code: `
    import { AgCharts } from "ag-charts-react";
    import clone from "clone";
    import React, { useState, Fragment } from "react";

    const ScatterChart = () => {
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
            data: [
            { name: "John", height: 180, weight: 75 },
            { name: "Mike", height: 175, weight: 70 },
            { name: "David", height: 190, weight: 85 },
            { name: "Paul", height: 185, weight: 78 },
            { name: "Chris", height: 170, weight: 68 },
            { name: "James", height: 178, weight: 80 },
            { name: "Tom", height: 165, weight: 65 },
            { name: "Robert", height: 182, weight: 76 },
            { name: "Steven", height: 188, weight: 88 },
            { name: "Mark", height: 181, weight: 82 },
            { name: "Joseph", height: 174, weight: 69 },
            { name: "Gary", height: 169, weight: 64 },
            { name: "Peter", height: 180, weight: 77 },
           ],
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
            data: [
            { name: "Anna", height: 160, weight: 55 },
            { name: "Mary", height: 165, weight: 60 },
            { name: "Lisa", height: 155, weight: 50 },
            { name: "Sophia", height: 170, weight: 58 },
            { name: "Emma", height: 168, weight: 62 },
            { name: "Olivia", height: 163, weight: 57 },
            { name: "Chloe", height: 169, weight: 64 },
            { name: "Harper", height: 174, weight: 66 },
            { name: "Evelyn", height: 161, weight: 53 },
            { name: "Grace", height: 176, weight: 68 },
            { name: "Zoey", height: 164, weight: 62 },
            { name: "Lily", height: 170, weight: 60 },
            { name: "Zara", height: 173, weight: 64 },
          ],
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
    
    export default ScatterChart;
   
    `,
  description:
    "A graph depicting data in scatter form. Various dots represent data-points.",
};

export default scatterSeriesCode;

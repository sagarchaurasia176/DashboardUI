const lineChartCode = {
  name: "Line Chart",
  code: `
  import { AgCharts } from "ag-charts-react";
  import clone from "clone";

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
  `,
  description:
    "A graph depicting data in line-format. Many lines can be drawn and customized",
};

export default lineChartCode;

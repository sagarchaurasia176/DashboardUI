const candleStickCode = {
  name: "Candle Stick Series",
  code: `
    import { useState } from "react";
    import { createRoot } from "react-dom/client";
    import { AgCharts } from "ag-charts-react";
    import { AgChartOptions } from "ag-charts-enterprise";
    import "ag-charts-enterprise";
    
    const ChartExample = () => {
      const [options, setOptions] = useState<AgChartOptions>({
        data: [
          {
            date: new Date("Monday, July 31, 2023"),
            open: 4584.82,
            high: 4594.22,
            low: 4573.14,
            close: 4588.96,
            volume: 2411537985000,
          },
          {
            date: new Date("Tuesday, August 01, 2023"),
            open: 4578.83,
            high: 4584.62,
            low: 4567.53,
            close: 4576.73,
            volume: 2172699881000,
          },
          {
            date: new Date("Wednesday, August 02, 2023"),
            open: 4550.93,
            high: 4550.93,
            low: 4505.75,
            close: 4513.39,
            volume: 2466207896000,
          },
          {
            date: new Date("Thursday, August 03, 2023"),
            open: 4494.27,
            high: 4519.49,
            low: 4485.54,
            close: 4501.89,
            volume: 2351421483000,
          },
          {
            date: new Date("Friday, August 04, 2023"),
            open: 4513.96,
            high: 4540.34,
            low: 4474.55,
            close: 4478.03,
            volume: 2386696495000,
          },
          {
            date: new Date("Monday, August 07, 2023"),
            open: 4491.58,
            high: 4519.84,
            low: 4491.15,
            close: 4518.44,
            volume: 2055431221000,
          },
          {
            date: new Date("Tuesday, August 08, 2023"),
            open: 4498.03,
            high: 4503.31,
            low: 4464.39,
            close: 4499.38,
            volume: 2172253124000,
          },
          {
            date: new Date("Wednesday, August 09, 2023"),
            open: 4501.57,
            high: 4502.44,
            low: 4461.33,
            close: 4467.71,
            volume: 2046722089000,
          },
          {
            date: new Date("Tuesday, October 31, 2023"),
            open: 4171.33,
            high: 4195.55,
            low: 4153.12,
            close: 4193.8,
            volume: 2701786725000,
          },
          {
            date: new Date("Wednesday, November 01, 2023"),
            open: 4201.27,
            high: 4245.64,
            low: 4197.74,
            close: 4237.86,
            volume: 2804876425000,
          },
        ],
        title: {
          text: "S&P 500 Index",
        },
        subtitle: {
          text: "Daily High and Low Prices",
        },
        footnote: {
          text: "1 Aug 2023 - 1 Nov 2023",
        },
        series: [
          {
            type: "candlestick",
            xKey: "date",
            xName: "Date",
            lowKey: "low",
            highKey: "high",
            openKey: "open",
            closeKey: "close",
          },
        ],
      });
    
      return <AgCharts options={options as any} />;
    };
    `,
  description:
    "A Candlestick Series shows open and close data with bars, and high and low data with wicks.",
};

export default candleStickCode;

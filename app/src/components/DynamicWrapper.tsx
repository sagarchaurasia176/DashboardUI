"use client";

import React, { useState, useEffect } from "react";
// sanitize and xss

type DynamicComponentProps = {
  Component?: React.ComponentType<any>;
  ComponentName: string;
  props?: Record<string, any>;
};

const DynamicWrapper: React.FC<DynamicComponentProps> = ({
  Component,
  ComponentName,
  props,
}) => {
  const [PreviewComponent, setPreviewComponent] =
    useState<React.FC<any> | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const importComponent = async () => {
      let importedComponent: React.FC<any> | null;
      try {
        // dynamic imports of components storybook based on ComponentName
        switch (ComponentName) {
          case "Line Chart":
            importedComponent = (await import("../stories/BarChart.stories"))
              .Default;
            break;
          case "Bar Chart":
            importedComponent = (await import("../stories/BarChart.stories"))
              .Default;
            break;
          case "Donut Series":
            importedComponent = (await import("../stories/DonutChart.stories"))
              .Default;
            break;
          case "Pie Chart":
            importedComponent = (await import("../stories/PieChart.stories"))
              .Default;
            break;
          case "Scatter Series":
            importedComponent = (
              await import("../stories/ScatterSeries.stories")
            ).Default;
            break;
          case "Area":
            importedComponent = (await import("../stories/AreaChart.stories"))
              .Default;
            break;
          case "Bubble Series":
            importedComponent = (
              await import("../stories/BubbleSeries.stories")
            ).Default;
            break;
          case "Box Plot Series":
            importedComponent = (
              await import("../stories/BoxPlotSeries.stories")
            ).Default;
            break;
          case "Candle Stick Series":
            importedComponent = (
              await import("../stories/CandleStickSeries.stories")
            ).Default;
            break;

          default:
            importedComponent = null;
        }
        setPreviewComponent(() => importedComponent);
      } catch (error) {
        console.log("Error loading components");
        setPreviewComponent(null);
      } finally {
        setLoading(false);
      }
    };

    importComponent();
  }, [ComponentName]);

  // handle loading
  if (loading) {
    return <div>Loading..</div>;
  }

  if (!PreviewComponent) {
    <div>No Component provided</div>;
  }

  return PreviewComponent ? (
    <PreviewComponent {...props} />
  ) : (
    <div>No Component provided</div>
  );
};

export default DynamicWrapper;

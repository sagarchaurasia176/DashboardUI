import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import scatterSeriesCode from "playground/scatterSeries/scatterSeriesCode";

type ComponentPreviewProps = {
  code: string;
};

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ code }) => {
  return <div></div>;
};

export default ComponentPreview;

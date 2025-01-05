// import "../src/tailwind.css";

/** @type { import('@storybook/react').Preview } */
import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

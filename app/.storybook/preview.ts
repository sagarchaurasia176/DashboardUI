// import "../src/tailwind.css";

/** @type { import('@storybook/react').Preview } */
import { Preview } from "@storybook/react";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    viewport: DEFAULT_VIEWPORT,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

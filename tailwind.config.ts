import type {Config} from "tailwindcss";

import plugin from "tailwindcss/plugin";

import themes from "./src/container/config/themes";

import utilities from "./src/container/config/utilities";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: themes.tailwindColors,
      ...utilities,
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({addVariant}) {
      addVariant("peer-nested", ":merge(.peer-nested):checked ~ * &");
    }),
  ],
  // daisyUI documentation: https://daisyui.com/docs
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ...themes.light,
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ...themes.dark,
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;

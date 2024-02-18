import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E8E6DC",
          base: "#D9D5C5",
          dark: "#ADAA9E",
        },
        secondary: {
          light: "#F3B57C",
          base: "#EE9747",
          dark: "#BE7939"
        },
        accent: {
          light: "#A2DFC5",
          base: "#7FD1AE",
          dark: "#66A78B",
        }
      },
    },
  },
  plugins: [],
};
export default config;

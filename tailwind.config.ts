import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text_color: "#FAF7FF",
        primary: {
          light: "#414141",
          base: "#121212",
          dark: "#0D0D0D",
        },
        secondary: {
          light: "#B6B6F5",
          base: "#8685EF",
          dark: "#5E5DA7"
        },
        accent: {
          light: "#E0FCE4",
          base: "#D3FBD8",
          dark: "#A9C9AD",
        }
      },
    },
  },
  plugins: [],
};
export default config;

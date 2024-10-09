// import { Fraunces, Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'beigeBase': "#FFEDC0",
        'greenBase': "#234334",
        'orangeBase': "#FA8334",
        'yellowBase': "#FFB800",
        'navyBase': "#0E264B"
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};

// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: [["./pages/**/*.{js,ts,jsx,tsx}"]],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(255, 255, 255)",
        foreground: "rgb(23, 23, 23)",
        gray: {
          50: "rgb(249, 250, 251)",
          100: "rgb(243, 244, 246)",
          200: "rgb(229, 231, 235)",
          300: "rgb(209, 213, 219)",
          400: "rgb(156, 163, 175)",
          500: "rgb(107, 114, 128)",
          600: "rgb(75, 85, 99)",
          700: "rgb(55, 65, 81)",
          800: "rgb(31, 41, 55)",
          900: "rgb(17, 24, 39)",
        },
        blue: {
          400: "rgb(96, 165, 250)",
          500: "rgb(59, 130, 246)",
          600: "rgb(37, 99, 235)",
          700: "rgb(29, 78, 216)",
        },
        red: {
          500: "rgb(239, 68, 68)",
          600: "rgb(220, 38, 38)",
        },
      },
    },
  },
  plugins: [],
};

export default config;

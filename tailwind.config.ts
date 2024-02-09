import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'blue': '#023E8A',
      },
      animation: {
        appear: 'appear 2s ease-in',
      },
      keyframes: {
        appear: {
          '0%': { opacity: "0" },
          '50%': { opacity: "0" },
          '100%': { opacity: "1" },
        }
      }
    },
  },
  plugins: [],
};
export default config;

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
        'lightBlue': '#5081FE',
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
      },
      backgroundImage: {
        'office': "url('../../public/office.png')",
        'officeHero': "url('../../public/office-hero.png')",
      },
      screens:{
        'sm': '450px',
      }
    },
  },
  plugins: [],
};
export default config;

import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  
  content: [
    // Make sure to include paths to NextUI components
    "./node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            cinzel: ['var(--font-cinzel)', 'serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {},
  darkMode: "class",
  plugins: [nextui({ 
    themes: {
      light: {
        colors: {
          brown: '#917c67',
        }
      }
    }
   })]
}

export default config;
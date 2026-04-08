/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-primary",
    "bg-primary",
    "border-primary",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mea: ['"Mea Culpa"', "cursive"],
      },
      colors: {
        primary: "#eab308",
        // #66CCFF - blue, #5AC8FA - blue (Apple Style), #eab308 -yellow, #F59E0B - dark-yellow
      },
    },
  },
  plugins: [],
};
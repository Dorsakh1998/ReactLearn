/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        military: {
          300: "#9CB38A",
          400: "#6B8555",
          500: "#556C45",
          600: "#3E5033",
          700: "#2A3724",
        },
        dark: {
          700: "rgba(255,255,255,0.06)",
          800: "rgba(0,0,0,0.5)",
          850: "rgba(0,0,0,0.65)",
        },
      },
    },
  },
  plugins: [],
};

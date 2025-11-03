/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Estedad FD", "Tahoma", "sans-serif"],
        en: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        dark: {
          950: "#0a0e14",
          900: "#12161f",
          850: "#1a1f2e",
          800: "#1f2533",
          700: "#2a303f",
          600: "#363d4f",
          500: "#4a5468",
        },
        military: {
          50: "#f4f6f1",
          100: "#e5e9dc",
          200: "#cbd4bc",
          300: "#a8b892",
          400: "#8ba572",
          500: "#6b8555",
          600: "#5d7347",
          700: "#4a5c3a",
          800: "#3d4a31",
          900: "#2b3424",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      sm: "390px",

      md: "960px",

      lg: "1920px",
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "330px",
        md: "860px",
        lg: "1320px",
      },
    },
  },
  plugins: [],
};

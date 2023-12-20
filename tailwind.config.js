/** @type {import('tailwindcss').Config} */
/*eslint no-undef: "error"*/
/*eslint-env node*/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        navItemColor: "#555",
        textColor: "#94a3b8",
        borderColor: "rgb(230,227,227)",
        darkGreen: "#15803d",
        green: "#16a34a",
        lightGreen: "#ecfccb",
        dimGray: "#e5e5e5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

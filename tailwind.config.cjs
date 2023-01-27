const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        box: "2px 0px 15px 5px #d1d2d4",
      },
      colors: {
        slate: "#6d6e70",
        red: "#ed1c24",
        grey: "#818285",
        green: "#23b46a",
        darkBlue: "#1e3668",
        midGray: "#d0d1d2",
        lightGrey: "#d1d2d4",
        veryLightGray: "#f4f4f4",
      },
    },
  },
  plugins: [],
};

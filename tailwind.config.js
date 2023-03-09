const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  content: ["./src/***/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-black": '#161819',
        "medium-black": "#2A2F38",
        "light-green": "#00D4B5",
        "platinum": "#e6e6e6",
      }
    },
  },
  plugins: [],
}

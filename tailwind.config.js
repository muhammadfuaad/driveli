const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/***/**/*.{html,js}"],
  safelist: [
    ...Object.keys(defaultTheme.spacing),
    {pattern: /(p|px|py|pt|pb|m|mx|my|mt|mb)-./}
  ],
  theme: {
    extend: {
      colors: {
        "dark-black": '#161819',
        "medium-black": "#2A2F38",
        "light-green": "#00D4B5",
        "platinum": "#e6e6e6",
        "95": "#95AABF",
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "light-brown": "#b1aaa5",
        "dark-brown": "#18120e",
        "light-gray": "#78706a",
        "medium-gray": "#46403b",
        "dark-gray": "#090401",
        orange: "#c7611a",
      },
    },
  },
  plugins: [],
};

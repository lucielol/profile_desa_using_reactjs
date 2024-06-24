/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "bg-slate-900/10",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

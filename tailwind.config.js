/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "bg-slate-900/10",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

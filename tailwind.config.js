/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["lemonade", "night", "synthwave"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        source_sans_pro: ["Source Sans Pro", "sans-serif"],
        yeseva_one: ["Yeseva One", "cursive"],
      },
    },
  },
  plugins: [],
};

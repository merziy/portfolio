/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'sky': "url('./assets/img/water.png')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "pale-kings-blue": "#94CCDE",
        "eosine-pink": "#E6778A",
        "pyrite-yellow": "#B69648",
        "calanine-blue": "#78C6C2",
      },
      fontFamily: {
        sans: ["futura-pt", "sans-serif"],
        hangul: ["Hangul", "sans-serif"],
      },
    },
  },
  plugins: [],
};

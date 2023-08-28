/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        iceblue: "url('./assets/img/ice-blue.png')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "pale-kings-blue": "#94CCDE",
        "eosine-pink": "#E6778A",
        "pyrite-yellow": "#B69648",
        "calanine-blue": "#78C6C2",
        red: "#da1e28",
        blue: "#0043ce",
      },
      fontFamily: {
        sans: ["futura-pt", "sans-serif"],
        artisan: ["Artisan", "sans-serif"],
      },
    },
  },
  plugins: [],
};

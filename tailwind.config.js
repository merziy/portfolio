/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'pale-kings-blue': '#94CCDE',
      },
      fontFamily: {
        'sans': [
          'futura-pt',
          'sans-serif',
        ]
      }
    },
  },
  plugins: [],
};

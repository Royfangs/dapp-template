const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      fontFamily: {
        sans: ['var(--poppins-font)', ...fontFamily.sans],
        serif: ['var(--poppins-font)', ...fontFamily.serif],
      },
      colors: {},
    },
  },
  plugins: [],
};

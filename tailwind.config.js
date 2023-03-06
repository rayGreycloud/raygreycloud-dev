const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      rose: colors.rose,
      yellow: colors.yellow,
      orange: colors.orange,
      green: colors.green,
      lime: colors.lime,
      cyan: colors.cyan,
      blue: colors.blue,
      sky: colors.sky,
      indigo: colors.indigo,
      purple: colors.purple
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};

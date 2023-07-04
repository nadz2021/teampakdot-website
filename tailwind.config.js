/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      red: '#E83845',
      gray: '#8C92AC',
      primary: '#003049',
      secondary: '#D62828',
      accent: '#F77F00',
      text: '#333333',
    },
    aspectRatio: {
      '4/3': '4 / 3',
    },
    extend: {},
  },
  plugins: [],
}


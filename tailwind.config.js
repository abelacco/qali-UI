/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'headerMainFooter': 'auto 1fr auto'
      },
      height: {
        '16': '4rem', // ajusta esta altura según tus necesidades
      },
      colors: {
        'qaliBlue': '#132B5B',
        'qaliGreen': '#0FFFA9',
        'qaliLightGrey': '#D4D6E4',
        'qaliGrey': '#969696',
        'qaliHover': '#041655E5'
      }
    },
  },
  plugins: [],
  safelist: [
    'qaliBlue',
    'qaliGreen',
    'qaliLightGrey',
    'qaliGrey',
  ]
}

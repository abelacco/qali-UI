/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'headerMainFooter': 'auto 1fr auto'
      },
      borderRadius: {
        '5': '5px'
      },
      fontSize: {
        '17': '17px'
      },
      height: {
        '16': '4rem', // ajusta esta altura según tus necesidades
      },
      colors: {
        'qaliBlue': '#132B5B',
        'qaliGreen': '#0FFFA9',
        'qaliLightGrey': '#D4D6E4',
        'qaliGrey': '#969696',
        'qaliHover': '#041655E5',
        'qaliYellow': '#FFF1A4',
        'qaliRed': '#EF8B8B'
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

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        primaryBtn: 'linear-gradient(90deg, #2AC5F4 0%, #00CCA5 113.16%)',
        tagSelect: 'linear-gradient(271.89deg, #B741E0 0%, #577CFF 113.16%)',
        banner:
          'linear-gradient(349.1deg, rgba(255, 255, 255, 0) 7.33%, #E9F3FF 41.63%, #ADD9FD 90.59%);',
        listZentor:
          'linear-gradient(349.1deg, rgba(255, 255, 255, 0) 7.33%, #E9F3FF 41.63%, #ADD9FD 90.59%)',
        itemsChallenge:
          'linear-gradient(167.78deg, #FFFFFF 8.9%, #E9F3FF 82.22%, #D1EAFF 173.24%)',
        bgChallenge: 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        gradientChat: 'linear-gradient(0deg, #F7F7FF, #F7F7FF)',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.my-button': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 15px',
          margin: '10px 200px',
          borderRadius: '4px',
          backgroundColor: '#008000',
          color: '#ffffff',
        },
      })
    })
  ],
}


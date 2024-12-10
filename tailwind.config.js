/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        customRed: '#ef5449',
      },
    },
  },
  screens: {
    '1xl': '1400px',
  },
  plugins: [],
}


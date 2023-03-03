const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible'
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden'
    }
  })
});

// Rotate Y utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          slate: '#6A8495',
          quizBlue: '#1EA5FC',
        }
    },
  },
  plugins: [backfaceVisibility, rotateY]
}


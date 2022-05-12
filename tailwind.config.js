// Montserrat

module.exports = {
  content: [
    "./src/**/*.{js,ts,css,twig}",
  ],
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#19191A',
      'marigold': '#D5A439',
      'plum': {
        'lightest': '#F8F7FB',
        'light': '#C6BEDF',
        'DEFAULT': '#775AA0',
        'dark': '#44355E',
      },
      'accent': {
        'DEFAULT': '#C3C2C4',
        'dark': '#717184',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },

    screens: {
      'sm': '640px',
      'md': '1024px',
      'lg': '1440px',
      'xl': '1640px',
    },
    extend: {
      backgroundImage: {
        'plum-gradient': 'linear-gradient(180deg, #775AA0 0%, #574275 100%);',
      },
      maxWidth: {
        'narrow': '1110px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

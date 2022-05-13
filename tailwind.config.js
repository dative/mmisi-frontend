// Montserrat

module.exports = {
  content: [
    "./src/templates/**/*.twig",
    "./src/js/**/*.{js,ts}",
    "./src/css/**/*.css",
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
      'md': '768px',
      'lg': '960px',
      'xl': '1024px',
      '2xl': '1440px',
      '3xl': '1640px',
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

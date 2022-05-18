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
      'green': '#6FCF97',
      'pastel-blue': '#5264AD',
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
      'narrow': '1110px',
      '2xl': '1440px',
      '3xl': '1640px',
    },
    extend: {
      animation: {
        orbit: 'orbit 10s linear infinite',
      },
      backgroundImage: {
        'plum-gradient': 'linear-gradient(180deg, #775AA0 0%, #574275 100%);',
      },
      backgroundPosition: {
        'top-hack': 'center -1px',
      },
      boxShadow: {
        'card': '0px 4px 36px rgba(0, 0, 0, 0.04)',
        'nav': '0px 4px 4px rgba(0, 0, 0, 0.1)'
      },
      keyframes: {
        orbit: {
          from: { transform: 'rotate(0) translateX(0.5rem) rotate(0)' },
          to: { transform: 'rotate(360deg) translateX(0.5rem) rotate(-360deg)' },
        }
      },
      maxWidth: {
        'narrow': '1110px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

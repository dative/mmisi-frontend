module.exports = {
  content: [
    "./src/**/*.{js,ts,css,twig}",
  ],
  theme: {
    extend: {},
    extend: {
      backgroundImage: {
        'plum-gradient': 'linear-gradient(180deg, #775AA0 0%, #574275 100%)',
      },
      maxWidth:{
        'narrow': '1100px',
        'heatherNarrow':'1380px',
      }
    },

    screens: {
      'lsm': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#19191A',
      'marigold': '#D5A439',
      'gray1':'#E5E5E5',
      'accent':{
        'DEFAULT': '#C3C2C4',
        'dark': '#717184',
      },
      'plum':{
        'DEFAULT': '#775AA0',
        'light': '#F8F7FB',
        'medium': '#C6BEDF',
      },
    },

    fontFamily: {
      'montserrat': ['Montserrat'],
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

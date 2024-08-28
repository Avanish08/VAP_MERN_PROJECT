/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      'dark-purple': '#5B3F8D', // Example dark purple
      'faint-navy': '#001F3F', // Example faint navy blue
    },
    fontFamily: {
      roboto: ['Roboto'],
      lato: ['Lato'],
      openSans: ['Open Sans'],
      montserrat: ['Montserrat'],
    },
  },
  },
  plugins: [],
}
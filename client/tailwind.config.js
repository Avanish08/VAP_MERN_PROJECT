/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      'dark-purple': '#0D7C66', // Example dark purple
      'faint-navy': '#41B3A2', // Example faint navy blue
      'primary-color':'#f8f4f9',
      'button-color':'#41B3A2'
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
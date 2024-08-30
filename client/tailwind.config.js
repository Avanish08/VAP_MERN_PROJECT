/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      'dark-purple': '#0D0630', // Example dark purple
      'faint-navy': '#001F3F', // Example faint navy blue
      'primary-color':'#C7EDE4',
      'button-color':'#9DACFF'
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
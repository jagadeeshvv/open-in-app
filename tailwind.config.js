/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:[ 'Lato'],
        montserrat: ['Montserrat' ],
        figtree:['Figtree'],
        nunito:['Nunito']
       }
    },
  },
  plugins: [],
}
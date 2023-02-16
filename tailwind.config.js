/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      screens : {
        '2xl' : '1320px',
      },
      colors : {
        primary : '#FFE2E2',
        secondary : '#F8EDED',
        third : '#539977',
        four : '#FFA4A4'
        
      },
      fontFamily :{
       'serronassans' : 'serronassans',
       'serronascript' : 'serronascript',
      }
    },
  },
  plugins: [],
}

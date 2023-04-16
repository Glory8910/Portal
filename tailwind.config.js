/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardcolor :'#FFFFFF'  ,
        cardborder : '#E6E6E6',
        fontcolor :'#212121',
        whitecolor : '#FAFAFA',
        errorcolor :' #D86161',
        placeholder:'#7A7A7A',
        primarycolor: '#1597E4'
        

      },
    },
  },
  plugins: [],
}


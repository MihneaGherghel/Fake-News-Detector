/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'myWhite': '#f2f2f2',
        'myRed':'#f56e56',
        'myBlack':'1e1e1e'
      },
    },
  },
  plugins: [],
}


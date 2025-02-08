/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '25': '100px',
        '45' : '185px'
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"], 
      },
    },
  },
  plugins: [],
}
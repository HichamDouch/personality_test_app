/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   'primary': '#22185D',
      //   'secondary' : "#81D5E2"
      // },
    },
    // container: {
    //   center: true,
    // },
    fontFamily : {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
}

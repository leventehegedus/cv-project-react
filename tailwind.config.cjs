/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gir: {
          1: '#F4D6CC',
          2: '#F4B860',
          3: '#C83E4D',
          4: '#4A5859',
          5: '#32373B',
          6: '#fff',
          7: '#F4C796'
        }
      }
    },
  },
  plugins: [],
}

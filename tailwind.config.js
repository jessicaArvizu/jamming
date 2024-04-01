/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#2D3250',
        'dark-blue': '#424769',
        'blue-grey': '#7077A1',
        'snow': '#FFFAFA',
        'mauveine': '#9C27B0'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/wavesOpacity.svg')",
      }
    },
  },
  plugins: [],
}
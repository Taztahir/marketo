/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'slow-bounce':
        'bounce 25s infinite',
        
      }
    },
  },
  plugins: [],
}
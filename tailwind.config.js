/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'nova': ['Nova Square', 'sans-serif'],
        'source': ['Source Code Pro', 'monospace']
      }
    },
  },
  variants: {},
  plugins: [],
}


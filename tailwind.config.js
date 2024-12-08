/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#faf9f5',
        'secondary': '#6f6e6c',
        'tertiary': '#3c3f3e'
      },
      fontFamily: {
        "newsreader": ["Newsreader", "serif"],
      },
    },
  },
  plugins: [],
}
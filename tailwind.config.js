/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#faf9f5',
        secondary: '#49413f',
        tertiary: '#3c3f3e',
      },
      fontFamily: {
        "newsreader": ["Newsreader", "serif"],
      },
    },
  },
  plugins: [],
}
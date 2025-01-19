/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "newsreader": ["Newsreader", "serif"],
      } 
    },
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#faf9f5",
          secondary: "#555856",
          accent: "#3c3f3e",
          "base": "#faf9f5"
        }
      }
    ]
  }
}
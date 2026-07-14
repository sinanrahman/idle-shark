/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        secondary: '#111111',
        accent: '#f97316', // Fallback orange, we can adjust once we see the exact logo color
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        heading: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

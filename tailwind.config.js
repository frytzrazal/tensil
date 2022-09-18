/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./_site/**/*.{html,njk}'],
  theme: {
    fontFamily: {
      'heading': ['Outfit', 'sans-serif'],
      'body': ['Barlow', 'sans-serif'],
      'sans': ['Barlow', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./_site/**/*.{html,njk}'],
  theme: {
    fontFamily: {
      'heading': ['Outfit', 'sans-serif'],
      'body': ['Barlow', 'sans-serif'],
      'sans': ['Barlow', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'black-olive': '#3D3B36',
        'orange': '#DF6726',
      },
    },
  },
  plugins: [],
}

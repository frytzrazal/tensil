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
        'light-orange': '#FFAF84',
        'dark-green': '#0E402D',
        'light-green': '#21A673',
        'tensil-green': '#82A626',
        'mint-cream': '#F4FFF7',
      },
    },
  },
  plugins: [],
}

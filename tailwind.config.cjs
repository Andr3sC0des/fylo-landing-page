/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'opensans' : 'Open Sans, Sans-serif',
        'raleway' : 'Raleway, Sans-serif'
      },
      backgroundImage: {
        'custom-curve-desktop' : 'url(./assets/bg-curve-desktop.svg)',
        'custom-curve-mobile' : 'url(./assets/bg-curve-mobile.svg)',
      },
      colors: {
        'very-dark-blue' : 'hsl(243, 87%, 12%)',
        'desaturated-blue': 'hsl(238, 22%, 44%)',
        'bright-blue' : 'hsl(224, 93%, 58%)',
        'moderate-cyan' : 'hsl(170, 45%, 43%)',
        'light-grayish-blue' : 'hsl(240, 75%, 98%)',
        'light-gray' : 'hsl(0, 0%, 75%)',
      },
    },
  },
  plugins: [],
}

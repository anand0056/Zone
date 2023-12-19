/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '576px',  // Custom small screen
      'md': '768px',  // Custom medium screen
      'lg': '992px',  // Custom large screen
      'xl': '1200px', // Custom extra-large screen
    },
    extend: {
    },
  },
  plugins: [],
}


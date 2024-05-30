/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // "13inch": "1300px",
      // "14inch": "1440px",
      // "2xl": "1538px",
    },

    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        customTeal: '#5BB5A2',
        meal :'#E8F2EE',
        yello:'#ffedd5',
        new : '#F8F8F8',
        yel : "#3b82f6"
      }
    },
  },
  plugins: [],
}
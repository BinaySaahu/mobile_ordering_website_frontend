/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'boxShadow':'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        'box_shadow_login': '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
      },
      backgroundColor:{
        'gradient':'linear-gradient(to right, #ff4b2b, #ff416c)'
      }
    },
  },
  plugins: [],
}


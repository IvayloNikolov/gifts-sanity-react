module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'black-50t': 'rgba(0,0,0,0.5)'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
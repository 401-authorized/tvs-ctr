/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js,tsx,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#0c4a85',
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#FF7235',
        accentHover: '#e05216',
        grey: '#F5F5F5',
      },
      backgroundImage: {
        overview: "url('/src/assets/img/overview/bg.svg')",
        cta: "url('/src/assets/img/cta/bg.svg')",
      },
    },
    fontFamily:{
      'poppins' : ['Poppins', 'sans-serif']
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
  },
  plugins: [],
}

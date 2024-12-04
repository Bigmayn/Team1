/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8BC34A',    // Mint green
        secondary: '#0D47A1',  // Deep blue
        accent: '#FFB300',     // Golden orange
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
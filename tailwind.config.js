/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryWhite: '#FFf',
        primaryBlue: '#6cb0f6',
      },
      fontFamily: {
        titleMenu: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

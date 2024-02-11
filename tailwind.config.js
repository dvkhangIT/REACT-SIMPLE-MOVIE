/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#f62682',
      },
    },
  },
  plugins: [],
};

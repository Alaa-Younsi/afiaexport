/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B9BD5',
        secondary: '#CC1A1A',
        'blue-light': '#A8C8E8',
        surface: '#F5F7FA',
        dark: '#1E2733',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        cairo: ['"Cairo"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


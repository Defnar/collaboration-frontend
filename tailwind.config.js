/**@type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        barbiePink: '#ff69b4',
        softPurple: '#d8b4fe',
        lightBlue: '#93c5fd',
      },
      fontFamily: {
        international: ['"Noto Sans JP"', 'sans-serif'],
        anime: ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
  plugins: [],
};
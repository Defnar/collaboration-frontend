/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        calmBlue: "#a1c4fd",
        calmPurple: "#c2e9fb",
      },
      backgroundImage: {
        "calm-gradient": "linear-gradient(to right, #a1c4fd, #c2e9fb)",
      },
    },
  },
  plugins: [],
}
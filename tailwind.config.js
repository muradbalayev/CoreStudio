/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.cursor-none': {
          cursor: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
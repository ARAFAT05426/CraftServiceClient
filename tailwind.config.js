/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'nav_h_minus': 'calc(100vh - 64px)',
      },
    },
  },
  plugins: [require('daisyui')],
}

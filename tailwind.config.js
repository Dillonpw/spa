/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
      colors:{
        button: 'var(--button)',
        background: 'var(--background)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        nav: 'var(--nav)',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-default': '#2B1827',
        'text-success': '#007f4f',
        'text-warning': '#fbaf08',
        'text-error': '#ff0000',
        'text-light': '#fcfcfd',
        'text-dark': '#191919',
        'white': '#ffffff',
        'black': '#000000',
        'blue': '#101357',
        'pink': '#fea49f',
        'yellow': '#fbaf08',
        'light-blue': '#00a0a0',
        'green': '#007f4f',
      },
    },
  },
  plugins: [],
}

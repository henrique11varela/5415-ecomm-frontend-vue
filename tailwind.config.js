/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'light': '#F0F0F0',
      'light-2': '#F0F0E0',
      'dark': '#141414',
      'dark-2': '#272714',
      'primary': '#E2B343',
      'primary-2': '#765A19',
    }
  },
  plugins: [],
}


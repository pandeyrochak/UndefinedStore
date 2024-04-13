/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,tsx,ts}'],
  theme: {
    extend: {
      colors: {
        spray: {
          50: '#ecfeff',
          100: '#cff9fe',
          200: '#8eeefb',
          300: '#67e6f9',
          400: '#22d0ee',
          500: '#06b3d4',
          600: '#088eb2',
          700: '#0e7290',
          800: '#155c75',
          900: '#164d63',
          950: '#083244',
        },
      },
    },
  },
  plugins: [],
}

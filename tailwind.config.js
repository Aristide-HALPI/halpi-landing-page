/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFAF3',
          100: '#FBF5E6',
          200: '#F7EBCC',
          300: '#F3E1B3',
          400: '#EFD799',
          500: '#EBCD80',
          600: '#B89B60',
          700: '#856A40',
          800: '#523820',
          900: '#1F0700',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#ADADAD',
          400: '#929292',
          500: '#777777',
          600: '#5C5C5C',
          700: '#414141',
          800: '#262626',
          900: '#0B0B0B',
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#B9E3FF',
          100: '#73C7FF',
          200: '#2DABFF',
          300: '#008AE6',
          400: '#0060A0',
          500: '#00365A',
          600: '#002D4B',
          700: '#00243C',
          800: '#001B2D',
          900: '#00121E'
        },
        secundary: {
          50: '#D0F6FF',
          100: '#A0ECFF',
          200: '#71E3FF',
          300: '#42D9FF',
          400: '#12D0FF',
          500: '#00B5E2',
          600: '#0097BC',
          700: '#007997',
          800: '#005A71',
          900: '#003C4B'
        },
        degradate: {
          50: '#F7F8F8',
          100: '#EFF0F0',
          200: '#E7E9E9',
          300: '#DFE1E2',
          400: '#D7DADA',
          500: '#CFD2D3',
          600: '#ABB0B2',
          700: '#868E90',
          800: '#646B6D',
          900: '#434749'
        }
      }
    }
  },
  plugins: []
}

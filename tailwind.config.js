/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '##FFFFFF',
        secundary:'#375786',
        aditional:'#E1E1E1',
      },
      fontFamily: {
        Qwitcher: ['Qwitcher Grypen', 'sans-serif'], // Reemplaza 'MiNuevaFuente' con el nombre de tu fuente
      },
    },
  },
  plugins: [],
}


const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'fuentePrincipal': ['Oswald', 'sans-serif']
      },
      backgroundImage: theme => ({
        'luna': "url('https://res.cloudinary.com/latamarket/image/upload/v1624468505/luna_aghhs8.png')",
        'estrellas': "url('https://res.cloudinary.com/latamarket/image/upload/v1624510634/stars_xrkrjt.png')",
        'estrellas-fugaz': "url('https://res.cloudinary.com/latamarket/image/upload/v1624513512/estrellafugaz1_p5efuk.png')",
        'fondo-espacio': "url('https://res.cloudinary.com/latamarket/image/upload/v1624515949/FondoEspacial_remspv.png')",
        'nave-espacial': "url('https://res.cloudinary.com/latamarket/image/upload/v1624516120/NaveEspacial_trz1lx.png')",
      }),
      animation: {
        'bg-luna': 'backLuna 30s linear infinite',
        'bg-estrella-fugaz': 'backEstrellaFugaz 10s linear infinite',
        'bg-fondo-espacio': 'backEspacio 90s linear infinite',
        'bg-nave-espacial': 'backNaveEspacial 70s linear infinite'
      },
      keyframes: {
        backLuna: {
          '0%': { 'background-position': '1800px 1400px' },
          '100%': { 'background-position': '-1000px -1100px' },
        },
        backEstrellaFugaz: {
          '0%': { 'background-position': '3300px 1600px' },
          '100%': { 'background-position': '-1000px -800px' },
        },
        backEspacio: {
          '0%': { 'background-position': '0px 0px' },
          '100%': { 'background-position': '-1000px -800px' },
        },
        backNaveEspacial: {
          '0%': { 'background-position': '1800px 1400px' },
          '100%': { 'background-position': '-1000px -800px' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

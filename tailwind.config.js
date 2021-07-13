const { guessProductionMode } = require("@ngneat/tailwind");
const { transform } = require("typescript");

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
        'luna': "url(assets/img/BannerTech.png)",
        'banner-tech': "url(assets/img/BannerTech.png)",
        'banner-proyecto': "url(assets/img/BannerProyecto.png)",
        'banner-proyecto-login': "url(assets/img/BannerLogin.png)",
        'forma-pago-1': "url(assets/img/FormaDePago1.png)",
        'forma-pago-2': "url(assets/img/FormaDePago2.png)",
        'banner-proyecto-principal': "url(assets/img/BannerPrincipal.png)",
        'tierra': "url(assets/img/EartWallpaper.png)",
        'estrellas': "url('https://res.cloudinary.com/latamarket/image/upload/v1624510634/stars_xrkrjt.png')",
        'estrellas-fugaz': "url('https://res.cloudinary.com/latamarket/image/upload/v1624513512/estrellafugaz1_p5efuk.png')",
        'fondo-espacio': "url(assets/img/FondoEspacial_remspv.png)",
        'nave-espacial': "url('https://res.cloudinary.com/latamarket/image/upload/v1624516120/NaveEspacial_trz1lx.png')",
      }),
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "40vh",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen100": "calc(100vh)",
        "screen55": "55vh",
        "screen60": "60vh",
        "screen70": "70vh",
        "screen80": "80vh",
        "screen35": "35vh",
      }),
      width: theme => ({
        "screen/2": "50vh",
        "screen/3": "40vh",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen100": "calc(100vh)",
        "screen55": "55vh",
        "screen60": "60vh",
        "screen70": "70vh",
        "screen80": "80vh",
        "screen45": "45vh",
      }),
      colors: {
        'fuchsia': '#fe5757',
        'dark-blue': '#49050D',
      },
      animation: {
        'bg-luna': 'backLuna 50s linear infinite',
        'bg-luna-md': 'backLunaMD 50s linear infinite',
        'bg-estrella-fugaz': 'backEstrellaFugaz 10s linear infinite',
        'bg-fondo-espacio': 'backEspacio 900s linear infinite',
        'bg-nave-espacial': 'backNaveEspacial 40s linear infinite',
        'bg-nave-espacial-xs': 'backNaveEspacialXS 40s linear infinite',
        'enter-card': 'enterCard 1s ',
        'exit-card': 'exitCard 1s ',
        'rigth-to-left': 'enterFromLeft 0.5s linear',
        'left-to-right': 'enterFromRight 0.5s linear',
        'left-to-right_1s': 'enterFromRight 0.3s linear',
        'left-to-right_1.5s': 'enterFromRight 0.8s linear',
        'back-to-left': 'backToLeft 0.5s linear',
        'back-to-right': 'backToRight 0.5s linear',
      },
      keyframes: {
        backLuna: {
          '0%': { transform: "translate(400%,250%)" },
          '100%': { transform: "translate(-200%,-200%)" },
        },
        backLunaMD: {
          '0%': { transform: "translate(400%,550%)" },
          '100%': { transform: "translate(-200%,-200%)" },
        },
        backEstrellaFugaz: {
          '0%': { 'background-position': '3300px 1600px' },
          '100%': { 'background-position': '-1000px -800px' },
        },
        backEspacio: {
          '0%': { 'background-position': '0px 0px' },
          '100%': { 'background-position': '-10000px -8000px' },
        },
        backNaveEspacial: {
          '0%': { transform: "translate(4000px,2000px)" },
          '100%': { transform: "translate(-200px,-100px)" },
        },
        backNaveEspacialXS: {
          '0%': { transform: "translate(4000px,5000px)" },
          '100%': { transform: "translate(-200%,-200%)" },
        },
        enterCard: {
          '0%': { transform: "scale(0.5)" },
          '100%': { transform: "scale(1)" },
        },
        exitCard: {
          '0%': { transform: "scale(1)" },
          '100%': { transform: "scale(0.5)" },
        },
        enterFromLeft: {
          '0%': { transform: "translate(100%,0%)" },
          '100%': { transform: "translate(0%,0%)" },
        },
        enterFromRight: {
          '0%': { transform: "translate(-100%,0%)" },
          '100%': { transform: "translate(0%,0%)" },
        },
        backToLeft: {
          '0%': { transform: "translate(0%,0%)" },
          '100%': { transform: "translate(-100%,0%)" },
        },
        backToRight: {
          '0%': { transform: "translate(00%,0%)" },
          '100%': { transform: "translate(100%,0%)" },
        }
      }
    },
  },
  variants: {
    opcity: ['responsive', 'hover', 'focus', 'disabled'],
    extend: {},
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        base_02: '#090914',
        tab_bg: '#F0ECFF',
        overview_orange: 'rgba(255, 149, 5, 0.2)',
        overview_green: 'rgba(0, 176, 88, 0.2)',
        danger: 'rgba(235, 29, 53, 1)',
        description: '#1C1A1A',
        global_text_color: 'rgba(84, 79, 82, 1)',
        form_screen_bg: '#E7E1FD',
        form_description: '#212120',
        border_line: '#E1E7EC',

      },
      fontSize: {
        xxs: '10px',
      },
      height: {
        main: 'calc(100vh - 85px)',
      },
      keyframes: {
        curve: {
          from: { strokeDashoffset: 326.56 },
          to: { strokeDashoffset: 55 },
        },
        appear: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        curve: 'curve 3.5s ease-in-out',
        appear: 'appear 2s',
      },
    },
  },
  plugins: [],
};

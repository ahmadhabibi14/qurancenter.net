/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Helvetica', 'Arial', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            '[dir="rtl"]': {
              direction: 'rtl',
              textAlign: 'right',
            },
          },
        },
      },
    },
  },
  plugins: [],
}

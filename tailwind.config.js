const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require( 'tailwindcss' ),
    require( 'precss' ),
    require( 'autoprefixer' ),
    require( '@tailwindcss/forms' ),
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
  ],
}
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      body: ['Raleway', 'sans-serif'],
      hero: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        github: {
          primary: '#211F1F',
          lighter: '#373535',
          darker: '#141313',
        },
        twitter: {
          primary: '#139BF1',
          lighter: '#2f89c5',
          darker: '#1670ab',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

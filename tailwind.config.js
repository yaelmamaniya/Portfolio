module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#001529',
        darkLight: '#002140',
        sitePrimary: '#1890ff',
      },
      fontFamily: {
        berkshireSwash: ['Berkshire Swash', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

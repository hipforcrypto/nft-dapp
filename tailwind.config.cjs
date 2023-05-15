/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'shp': ["PowerGrotesk"],
      'mpb': ["MabryPro-Bold"],
      'mpr': ["MabryPro-Regular"],
    }
  },
  plugins: [],
};

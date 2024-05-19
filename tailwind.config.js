/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#f97316',
        'primary-200': '#dd5a00',
        dark: '#2b2b2b',
      },
      fontFamily: {
        sans: ['var(--font-dejaVuSans)'],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen sm': {
            maxWidth: '90%',
          },
          '@screen md': {
            maxWidth: '90%',
          },
          '@screen lg': {
            maxWidth: '90%',
          },
          '@screen 2xl': {
            maxWidth: '1480px',
          },
        },
      });
    },
  ],
  darkMode: 'class',
};

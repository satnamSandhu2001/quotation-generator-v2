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
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'dark-100': 'var(--dark-100)',
        'dark-200': 'var(--dark-200)',
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
  dark: 'class',
};

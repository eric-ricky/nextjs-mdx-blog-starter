/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        headinglg: [
          '4.8rem',
          { lineHeight: '1.1' },
          { letterSpacing: '-0.02em' },
        ],
        headingmd: [
          '2.88rem',
          { lineHeight: '1.2' },
          { letterSpacing: '-0.02em' },
        ],
        headingsm: [
          '1.8rem',
          { lineHeight: '1.4' },
          { letterSpacing: '-0.02em' },
        ],
        headingxs: [
          '1.08rem',
          { lineHeight: '1.4' },
          { letterSpacing: '-0.02em' },
        ],
        subheading: ['1.44rem', { lineHeight: '1.35' }],
        body: ['16px', { lineHeight: '1.4' }, { letterSpacing: '0' }],
      },
    },
  },
  plugins: [],
};

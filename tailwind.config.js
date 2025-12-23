/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // luxury headings
        body: ['Poppins', 'sans-serif'], // clean body text
      },
      letterSpacing: {
        tightest: '-0.03em',
        widest: '0.12em',
      },
      colors: {
        gold: '#D4AF37',
        dark: '#1E1E1E',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navanirman-ivory': 'var(--color-navanirman-ivory)',
        'navanirman-concrete': 'var(--color-navanirman-concrete)',
        'navanirman-charcoal': 'var(--color-navanirman-charcoal)',
        'navanirman-slate': 'var(--color-navanirman-slate)',
        'navanirman-terracotta': 'var(--color-navanirman-terracotta)',
        'navanirman-black': 'var(--color-navanirman-black)',
        'navanirman-warmgrey': 'var(--color-navanirman-warmgrey)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      }
    },
  },
  plugins: [],
}

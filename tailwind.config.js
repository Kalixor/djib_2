module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5b8fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#081028',
          900: '#060c1f',
          950: '#040817',
        },
        card: {
          DEFAULT: '#0b1739',
          text: '#aeb9e1', // Ajout de la couleur de texte
        },
        pastel: {
          yellow: '#fffef2',
        },
      },
    },
  },
  plugins: [],
}

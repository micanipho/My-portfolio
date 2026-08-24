/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  mode: 'jit',
  darkMode: 'class',

  future: {
    hoverOnlyWhenSupported: true,
  },

  theme: {
    extend: {
      colors: {
        // "Response Unit" palette — deep navy / bone / signal orange, one teal accent
        unit: {
          bg: '#0A121C',      // page background
          strip: '#0C1522',   // status strip / recessed panels
          panel: '#0E1927',   // card / ID panel background
          border: '#1E2E42',  // default hairline border
          'border-dim': '#182739',
          'border-2': '#223349',
          orange: '#F2622E',
          'orange-hover': '#FF8452',
          teal: '#2FB6C4',
          bone: '#E6EDF5',
          steel: '#7C90AA',    // secondary labels — meets 4.5:1 on unit.bg and unit.panel
          'steel-2': '#8A9BB0',
          'steel-3': '#A9BACD',
          'steel-4': '#9BADC2',
        },
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

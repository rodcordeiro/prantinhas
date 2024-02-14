/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C8653',
        background: '#E0E0E0',
        secondBackground: '#F0F0F0',
        title: '#1e1e1e',
        subtitle: '#6e6e6e',
        'sea-green': {
          50: '#f2fbf6',
          100: '#e1f7ea',
          200: '#c5edd6',
          300: '#98ddb5',
          400: '#63c58d',
          500: '#3daa6c',
          600: '#2c8653',
          700: '#276e47',
          800: '#23583a',
          900: '#1f4832',
          950: '#0c2719',
        },
      },
      fontFamily: {
        heading: 'Inter_600SemiBold',
        subtitle: 'Inter_500Medium',
        body: 'Inter_400Regular',
        bold: 'Inter_700Bold',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F9F7F4',
          surface: '#FFFFFF',
          border: '#E8E4DF',
          text: '#1F1F1F',
          muted: '#8B8680',
        },
        dark: {
          bg: '#1A1A1E',
          surface: '#2D2D33',
          border: '#3F3F47',
          text: '#E8E8E8',
          muted: '#A0A0A8',
        },
        brand: {
          primary: '#2563EB',
          secondary: '#7C3AED',
          accent: '#EC4899',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

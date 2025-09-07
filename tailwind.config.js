/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(30, 144, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(30, 144, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1E90FF 0%, #6A5ACD 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(30, 144, 255, 0.3)',
        'glow-lg': '0 0 30px rgba(30, 144, 255, 0.6)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background': 'linear-gradient(135deg, #1E90FF, #6A5ACD)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.gradient-bg': {
          'background': 'linear-gradient(135deg, #1E90FF 0%, #6A5ACD 100%)',
        },
        '.glow-effect': {
          'box-shadow': '0 0 20px rgba(30, 144, 255, 0.3)',
          'transition': 'all 0.3s ease',
        },
        '.glow-effect:hover': {
          'box-shadow': '0 0 30px rgba(30, 144, 255, 0.6)',
          'transform': 'translateY(-2px)',
        },
        '.card-hover': {
          'transition': 'all 0.3s ease',
        },
        '.card-hover:hover': {
          'transform': 'translateY(-5px)',
          'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.1)',
        },
        '.skill-item': {
          'transition': 'all 0.3s ease',
        },
        '.skill-item:hover': {
          'transform': 'scale(1.05)',
          'color': '#FFD700',
        },
        '.typing-animation': {
          'border-right': '2px solid #FFD700',
          'animation': 'typing 3s steps(30) infinite, blink 1s infinite',
        },
        '.fade-in': {
          'opacity': '0',
          'transform': 'translateY(30px)',
          'transition': 'all 0.6s ease',
        },
        '.fade-in.visible': {
          'opacity': '1',
          'transform': 'translateY(0)',
        },
        '.dark-mode': {
          'background': '#0f172a',
          'color': '#e2e8f0',
        },
        '.dark-mode .bg-white': {
          'background': '#1e293b !important',
        },
        '.dark-mode .text-gray-800': {
          'color': '#e2e8f0 !important',
        },
        '.dark-mode .text-gray-600': {
          'color': '#94a3b8 !important',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

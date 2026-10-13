import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#020818',
          800: '#050B17',
          700: '#0A0F1E',
          600: '#0F1629',
          500: '#151E38',
          400: '#1E2D4A',
          300: '#2A3F66',
        },
        primary: {
          DEFAULT: '#00D4FF',
          50: '#E6FAFE',
          100: '#B3F1FD',
          200: '#80E8FC',
          300: '#4DDFFA',
          400: '#1AD6F9',
          500: '#00D4FF',
          600: '#00AACC',
          700: '#007F99',
          800: '#005566',
          900: '#002A33',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          50: '#F3EEFF',
          100: '#DDD0FC',
          200: '#C7B1F9',
          300: '#B092F6',
          400: '#9A73F3',
          500: '#7C3AED',
          600: '#6330BE',
          700: '#4A258E',
          800: '#311A5F',
          900: '#180D2F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'orbit': 'orbit 12s linear infinite',
        'orbit-reverse': 'orbit 12s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)' },
          '100%': { boxShadow: '0 0 50px rgba(0, 212, 255, 0.6), 0 0 100px rgba(0, 212, 255, 0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-15px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scan: {
          '0%': { top: '-10%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '110%', opacity: '0' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H39.5V40'/%3e%3c/svg%3e\")",
        'dot-pattern': "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgb(255 255 255 / 0.08)'/%3E%3C/svg%3E\")",
        'gradient-primary': 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
        'gradient-hero': 'radial-gradient(ellipse at 60% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 212, 255, 0.25)',
        'glow': '0 0 30px rgba(0, 212, 255, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 212, 255, 0.35)',
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.3)',
        'glow-purple-lg': '0 0 60px rgba(124, 58, 237, 0.4)',
        'inner-glow': 'inset 0 0 30px rgba(0, 212, 255, 0.08)',
        'card': '0 4px 32px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 12px 60px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}

export default config

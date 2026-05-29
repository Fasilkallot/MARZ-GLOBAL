/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002E7A',
          50: '#E6EDF8',
          100: '#CCDAF1',
          200: '#99B5E3',
          300: '#6690D5',
          400: '#336BC7',
          500: '#002E7A',
          600: '#002562',
          700: '#001C49',
          800: '#001231',
          900: '#000918',
        },
        secondary: {
          DEFAULT: '#F45A00',
          50: '#FEF0E6',
          100: '#FDE1CC',
          200: '#FBC399',
          300: '#F9A566',
          400: '#F77833',
          500: '#F45A00',
          600: '#C34800',
          700: '#923600',
          800: '#612400',
          900: '#301200',
        },
        dark: '#1A1A1A',
        light: '#F8F9FB',
      },
      fontFamily: {
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0,46,122,0.85), rgba(0,0,0,0.75))",
        'industrial-dark': "linear-gradient(135deg, #001A45 0%, #1A1A1A 100%)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,46,122,0.15)',
        'nav': '0 2px 20px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}

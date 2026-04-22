/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",  
  ],
  theme: {
    extend: {
      colors: {
        // Updated to the exact Navy used in the elegant cards
        'navy': '#001f3f', 
        'royal-blue': '#0D1B4C',
        'deep-blue': '#142A6E',
        'gold': '#D4AF37',
        'soft-gold': '#E7C96F',
        'off-white': '#FAF8F2',
        'dark-text': '#1B1B1B',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        // CHANGE THIS: Point it to the Open Sans variable from your layout
        sans: ['var(--font-open-sans)', 'sans-serif'], 
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideInUp: 'slideInUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
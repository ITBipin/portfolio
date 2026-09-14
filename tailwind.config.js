/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 10px 30px rgba(37, 99, 235, 0.2)',
      },
      colors: {
        ink: '#0b1020',
        panel: '#111827',
        accent: '#7dd3fc',
        soft: '#dbeafe',
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f7ff',
        'neon-green': '#39ff14',
        'dark-bg': '#080808',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': {
            'text-shadow': '0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 30px #00f7ff',
          },
          '50%': {
            'text-shadow': '0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 15px #00f7ff',
          },
        },
      },
    },
  },
  plugins: [],
};
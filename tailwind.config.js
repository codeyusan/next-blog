/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        "vh/8": "calc(100vh - 80px)"
      },
      keyframes: {
        left: {
          '0%': { left: '0', opacity: .7 },
          '100%': { left: '-300px', opacity: 0 },
        },
        right: {
          '0%': { right: '0', opacity: .7 },
          '100%': { right: '-300px', opacity: 0 },
        }
      },
      animation: {
        "left": 'left 3s linear forwards',
        "right": 'right 3s linear forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

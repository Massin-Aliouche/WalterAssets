module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,html}'
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'fade-up': 'fade-up 600ms ease-out both',
        float: 'float 4s ease-in-out infinite'
      },
      colors: {
        primary: '#4f46e5'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        bg: '#0a0a0f',
        ink: '#f4f4f7',
        surface: '#111118',
        surface2: '#171720',
        border: '#222233',
        accent: '#00ff88',
        accent2: '#ff3c6e',
        accent3: '#3c8fff',
        muted: '#888899',
      },
      boxShadow: {
        panel: '0 30px 80px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        blink: 'blink 1.5s infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}

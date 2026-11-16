/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          secondary: 'var(--bg-secondary)',
        },
        surface: 'var(--surface)',
        'text-primary': 'var(--text-primary)',
        'text-body': 'var(--text-body)',
        'text-muted': 'var(--text-muted)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          soft: 'var(--accent-soft)',
        },
        'button-bg': 'var(--button-bg)',
        'button-text': 'var(--button-text)',
        border: 'var(--border)',
        focus: 'var(--focus)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        border: 'var(--border)',
      },
      boxShadow: {
        theme: 'var(--shadow)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionDuration: {
        '180': '180ms',
      },
    },
  },
  plugins: [],
}

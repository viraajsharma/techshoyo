/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--bg-black, #000000)',
          secondary: 'var(--bg-card, #0A0A0A)',
          tertiary: 'var(--bg-elevated, #111111)',
        },
        foreground: {
          DEFAULT: 'var(--text-white, #FAFAFA)',
          muted: 'var(--text-muted, #A1A1A1)',
          subtle: 'var(--text-subtle, #6B6B6B)',
        },
        border: {
          subtle: 'var(--border-subtle, rgba(255, 255, 255, 0.08))',
          medium: 'var(--border-medium, rgba(255, 255, 255, 0.14))',
          strong: 'var(--border-strong, rgba(255, 255, 255, 0.25))',
        },
        accent: {
          DEFAULT: 'var(--accent-color, #FAFAFA)',
          glow: 'var(--accent-glow, rgba(255, 255, 255, 0.15))',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Sora', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.04' },
          '50%': { opacity: '0.08' },
        }
      }
    },
  },
  plugins: [],
}

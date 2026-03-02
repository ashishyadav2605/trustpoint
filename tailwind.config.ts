import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        trustBlack: '#121212',
        trustDarkGrey: '#2D2D2D',
        trustGrey: '#737373',
        trustLightGrey: '#F5F5F5',
        trustWhite: '#FFFFFF',
        // Accent colors for vibrancy
        trustBlue: '#2563EB',
        trustBlueDark: '#1D4ED8',
        trustBlueLight: '#3B82F6',
        trustTeal: '#0D9488',
        trustGold: '#D97706',
        trustGoldLight: '#F59E0B',
        trustNavy: '#1E3A5F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config

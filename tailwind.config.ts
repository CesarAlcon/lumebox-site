import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lume-yellow':      '#F9C623',
        'lume-yellow-dark': '#D4A614',
        'lume-dark':        '#1A1A1A',
      },
      fontFamily: {
        sans:    ['var(--font-inter)',     'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia',   'serif'],
      },
      fontSize: {
        'sm':  ['0.875rem', { lineHeight: '1.5'  }],
        'base':['1rem',     { lineHeight: '1.7'  }],
        'lg':  ['1.125rem', { lineHeight: '1.7'  }],
        'xl':  ['1.25rem',  { lineHeight: '1.5'  }],
        '2xl': ['1.5rem',   { lineHeight: '1.35' }],
        '3xl': ['2rem',     { lineHeight: '1.2'  }],
        '4xl': ['2.75rem',  { lineHeight: '1.15' }],
        '5xl': ['3.75rem',  { lineHeight: '1.1'  }],
      },
      borderRadius: {
        'btn':     '6px',
        'card':    '12px',
        'card-sm': '8px',
      },
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config

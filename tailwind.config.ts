/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        custom: {
          background: {
            main: 'hsl(var(--main-bg))',
            text: 'hsl(var(--bg-text))',
            titleBar: 'hsl(var(--titleBar-bg))',
            sidebar: {
              DEFAULT: 'hsl(var(--sidebar-bg))',
              hover: 'hsl(var(--sidebar-hover-bg))',
            },
            explorer: {
              DEFAULT: 'hsl(var(--explorer-bg))',
              hover: 'hsl(var(--explorer-hover-bg))',
            },
            tabs: 'hsl(var(--tabs-bg))',
            tab: {
              DEFAULT: 'hsl(var(--tab-bg))',
              active: 'hsl(var(--tab-active-bg))',
            },
            bottomBar: {
              DEFAULT: 'hsl(var(--bottomBar-bg))',
              hover: 'hsl(var(--bottomBar-hover-bg))',
            },
            button: 'hsl(var(--button-bg))',
            scrollbarTrack: 'hsl(var(--scrollbar-track-bg))',
            scrollbarThumb: 'hsl(var(--scrollbar-thumb-bg))',
            article: 'hsl(var(--article-bg))',
          },
          color: {
            text: 'hsl(var(--text-color))',
            accent: 'hsl(var(--accent-color))',
            button: 'hsl(var(--button-text))',
          },
          border: {
            explorer: 'hsl(var(--explorer-border))',
            tab: 'hsl(var(--tab-border))',
            bottomBar: 'hsl(var(--bottomBar-border))',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')],
};

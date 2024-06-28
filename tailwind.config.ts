import type { Config } from 'tailwindcss'

const config: Config = {
  variants: {
    animation: ['responsive', 'hover', 'focus'],
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  darkMode: 'class',
  theme: {
    extend: {
      slidein: {
        from: {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    animation2: {
      slidein: "slidein 1s ease 300ms",
    },

    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },

      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
  
    plugins: [],
  }
} 
export default config

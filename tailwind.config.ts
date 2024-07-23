import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        shapeTransform: {
          '0%, 100%': {
            clipPath: 'circle(50% at 50% 50%)', // Circle
            borderRadius: '50%',
          },
          '25%': {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Square
            borderRadius: '0%',
          },
          '50%': {
            clipPath: 'circle(50% at 50% 50%)', // Circle
            borderRadius: '0%',
          },
          '75%': {
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Triangle
            borderRadius: '0%',
          },
        },
      },
      animation: {
        shapeTransform: 'shapeTransform 12s infinite', // Total duration
      },
    },
  },
  plugins: [],
};

export default config;

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
        triangleTransform: {
          '0%': {
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Initial triangle
            opacity: '1',
          },
          '25%': {
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Remains as triangle
            opacity: '1',
          },
          '50%': {
            clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)', // Inverted triangle
            opacity: '0.5',
          },
          '75%': {
            clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)', // Inverted triangle
            opacity: '0.5',
          },
          '100%': {
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Back to initial triangle
            opacity: '1',
          },
        },
      },
      animation: {
        triangleTransform: 'triangleTransform 6s infinite', // 6s total duration
      },
      backgroundImage: {
        gradientTriangle: 'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
      },
    },
  },
  plugins: [],
};

export default config;

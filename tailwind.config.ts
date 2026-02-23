import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#7c84ff',
          500: '#5b67ff',
          600: '#4c57f2'
        }
      },
      boxShadow: {
        glow: '0 0 25px rgba(91,103,255,.45)'
      },
      backgroundImage: {
        noise: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M0 0h1v1H0zM80 80h1v1h-1zM159 159h1v1h-1z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
};

export default config;

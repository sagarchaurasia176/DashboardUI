// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        text: 'text 1s infinite ease-in-out',
        move: 'move 2s infinite ease-in-out',
        scale: 'scale 2s infinite ease-in-out',
      },
      keyframes: {
        text: {
          '0%, 100%': { backgroundPosition: '0% 100%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        move: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      backgroundSize: {
        200: '200% 200%',
      },
    },
  },
  plugins: [],
};

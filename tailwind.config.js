/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        HaasRg: ["NHaasGroteskRg", "sans-serif"],
        HaasMd: ["NHaasGroteskMd", "sans-serif"],
        HaasBd: ["NHaasGroteskBd", "sans-serif"],
      },
      keyframes: {
        updown: {
          "0%, 100%": {
            transform: "translateY(-5%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        updown: "updown 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

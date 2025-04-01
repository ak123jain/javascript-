// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 10s ease-in-out infinite alternate",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translateX(-30px) translateY(-20px) scale(1)", opacity: 0.6 },
          "50%": { transform: "translateX(40px) translateY(30px) scale(1.1)", opacity: 0.8 },
          "100%": { transform: "translateX(-20px) translateY(-30px) scale(1)", opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
};

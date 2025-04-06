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



//  imoptttttttttttttttttttt

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         aurora: "aurora 10s ease-in-out infinite alternate",
//       },
//       keyframes: {
//         aurora: {
//           "0%": { transform: "translateX(-30px) translateY(-20px) scale(1)", opacity: 0.6 },
//           "50%": { transform: "translateX(40px) translateY(30px) scale(1.1)", opacity: 0.8 },
//           "100%": { transform: "translateX(-20px) translateY(-30px) scale(1)", opacity: 0.6 },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

 

 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 12s ease-in-out infinite alternate",
        "meteor-effect": "meteor 6s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translateX(-50px) translateY(-30px) scale(1)", opacity: 0.5 },
          "50%": { transform: "translateX(50px) translateY(30px) scale(1.2)", opacity: 0.9 },
          "100%": { transform: "translateX(-30px) translateY(-20px) scale(1)", opacity: 0.5 },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "60%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-600px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
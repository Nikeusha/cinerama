/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        lg: "992px",
        // => @media (min-width: 1440px) { ... }
        xl: "1200px",
      },
    },
  },
  plugins: [],
};

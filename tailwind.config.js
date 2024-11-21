/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          sm: "1rem",
          md: "0",
        },
      },

      fontFamily: {
        check: "check",
        Semi: "petch",
        checkRegular: "checkRegular",
      },

      colors: {
        section: "#f8fcff",
        offwhite: "#F2F2F2",
        offblack: "#4A4A4A",
        back: "#fff",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "90%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};

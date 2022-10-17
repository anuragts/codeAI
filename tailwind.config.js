/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#EEEEEE",
        third: "#00ADB5",
        accent: "#393E46",
        bl: "rgba(0, 0, 0, 0.5)",
      },
      screens: {
        fd: "300px",
        sm: "450px",
        md: "768px",
        lg: "1350px",
      },

      fontFamily: {
        custom: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

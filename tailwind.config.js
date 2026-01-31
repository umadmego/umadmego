/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "DM Sans, sans-serif",
        secondary: "Sora, sans-serif",
        cursive: "Kaushan Script, cursive",
      },
      textColor: {
        primary: "#6B4F4B", // Brown
        secondary: "#DDCDBB", // Sand Beige
        success: "#08A05C",
        error: "#F13637",
        warning: "#FFC107",
        lightGrey: "#A9A9A9",
        light: "white",
      },
      backgroundColor: {
        primary: "#6B4F4B", // Brown
        secondary: "#DDCDBB", // Sand Beige
        success: "#08A05C",
        error: "#F13637",
        warning: "#FFC107",
      },
      borderColor: {
        primary: "#6B4F4B", // Brown
        secondary: "#DDCDBB", // Sand Beige
        error: "#F13637",
        lightGrey: "#A9A9A9",
        success: "#08A05C",
      },
      padding: {
        primary: "6vw",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1E3A8A",
        offwhite: "#F8F8F8",
        searchGray: "#F3F4F6",
        placeholderGray: "#A0A0A0",
      },
    },
  },
  plugins: [],
};

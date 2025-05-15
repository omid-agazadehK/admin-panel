/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "8rem",
    },
    extend: {
      fontFamily: {
        "vazir-medium": ["Vazirmatn-Medium", "sans-serif"],
      },
      colors: {
        borderLight: "#E4E4E4",
        bgBody: "#F7F8F8",
        bgLight: "#F2F2F2",
        textDark: "#282828",
        btnBlue: "#55A3F0",
        linkBlue: "#3A8BED",
        placeholderGray: "#8D8D8D",
      },
    },
  },
  plugins: [],
};

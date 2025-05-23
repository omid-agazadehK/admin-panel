/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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

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
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: ["Lemon"],
      },
      dropShadow: {
        red: "5px 5px #f87171",
      },
    },
  },
  plugins: [],
};

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
      colors: {
        accent: "rgb(255, 228, 94)",
      },
      scale: {
        101: "1.01",
        103: "1.03",
      },
      maxHeight: {
        modal: "600px",
      },
    },
  },
  plugins: [],
};

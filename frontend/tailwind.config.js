/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffb3c6",
        second: "ffc2d1",
        third: "ff8fab",
        text_muted: "#fff",
        accent: "fb6f92",
      },
    },
  },
  plugins: [require("daisyui")],
};

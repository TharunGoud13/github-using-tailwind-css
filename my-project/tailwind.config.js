/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fav: "#ef4444",
      },
      fontFamily: {
        text: ["Caveat"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        animation: ".5s linear 1s infinite alternate slidein",
      },
      backgroundColor: {
        redbg: "#f87171",
        limebg: "#bef264",
        orangebg: "#fcd34d",
        cyanbg: "#67e8f9",
        graybg: "#cbd5e1",
      },
    },
  },
  plugins: [],
};

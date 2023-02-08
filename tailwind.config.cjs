/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Inter",
    },
    container: {
      padding: {
        DEFAULT: "2.5rem",
        // lg: '3rem',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#FA4F06",
        secondary: "#FFDAAE",
        hero:"#FFECD8",
        darkest: "#1E1307",
        readmore: "#092E76",
        buttonborder: "#E3D3C0"
      },
      backgroundImage: {
        pattern: "url('/src/images/Vector.svg')",
      },
    },
  },
  plugins: [],
}

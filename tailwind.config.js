//See https://tailwindcss.com/docs/customizing-colors

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        theme: {
          light: "#DAE1E7",
          DEFAULT: "#27496D",
          chroma: "#2B2E4A",
          dark: "#142850",
          darker: "#06132f",
          accent: "#00909E",
          deep: "#283149",
          sky: "#DBEDF3",
          skylight: "#abe2f5",
          subdue: "#903749",
          mellow: "#53354A",
          contrast: "#E84545",
          highlight: "#F73859",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

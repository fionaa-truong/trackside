/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mclaren: ["var(--font-mclaren)", "sans-serif"],
      },
      colors: {
        "blue-white": "#D1D3E5",
        "sky-blue": "#BBCFE3",
        "ocean-blue": "#2F579B",
        "moody-grey": "#303030",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        "::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#8E9FCA",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#3d4c6e",
        },
        "::-webkit-details-marker": {
          display: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

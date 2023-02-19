/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      "custom-2": "2px",
      "custom-4": "4px",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "2px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      colors: {
        custom: {
          900: "#1E1E1E",
          1:"#be9b2d"
        },
        gray: {
          150: "#F2F2F2",
        },
        lightgray: {
          100: "#eee",
        },
        konfigear: {
          100: "#330099",
          200: "#720094",
        },
      },
      borderRadius: {
        large: "25px",
      },
      maxWidth: {
        large: "2048px",
      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        slideToTop: {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        slideToTop: "slideToTop 0.3s ease-in-out forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      screens: {
        short: { raw: "(max-height: 636px)" },
      },
    },
  },
  plugins: [],
})

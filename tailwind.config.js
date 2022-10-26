const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["inter", ...defaultTheme.fontFamily.sans],
        "inter-bold": ["inter-bold", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        button:
          "0px 0px 0px 1px #FFFFFF, 0px 0px 0px 2px #3B82F6, 0px 0px 0px 6px rgba(59, 130, 246, 0.3)",
        input:
          "0px 0px 0px 1px #FFFFFF, 0px 0px 0px 2px #3B82F6, 0px 0px 0px 4px rgba(59, 130, 246, 0.3)",
      },
      content: {
        'tooltip-arrow': "url('./assets/arrow.svg')"
      }
    },
  },
  plugins: [],
};

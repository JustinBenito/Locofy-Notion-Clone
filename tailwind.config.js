/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f8f8f8",
        black: "#212121",
        darkslategray: {
          "100": "#37352f",
          "200": "rgba(55, 53, 47, 0.65)",
          "300": "rgba(55, 53, 47, 0.09)",
          "400": "rgba(55, 53, 47, 0.5)",
        },
        gainsboro: "#ddd",
        "gray-50": "#fafafa",
        seagreen: "#448361",
        steelblue: "#337ea9",
        gray: "#787774",
        "dark-grey": "#5a5a65",
        grey: "#4d4d4d",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      smi: "13px",
      sm: "14px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

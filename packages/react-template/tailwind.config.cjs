/* eslint-env node */
/** @type {import('tailwindcss').Config} */

const pxToRem = (dest) => 1 / (16 / dest);

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@ignt/react-library/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      DEFAULT: "16px 32px 128px -8px rgba(0, 0, 0, 0.07)",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: {
          500: "rgba(255,255,255,0.5)",
          800: "rgba(255,255,255,0.82)",
          1000: "#fff",
        },
        black: "#111111",
        gray: {
          0: "#000",
          50: "#f0f0f0",
          30: "rgba(0, 0, 0, 0.03)",
          70: "rgba(0, 0, 0, 0.07)",
          330: "rgba(0, 0, 0, 0.33)",
          660: "rgba(0, 0, 0, 0.667)",
        },
        primary: "#094EFD",
        secondary: "#95DCFD",
        // functional colors
        bg: "#fff",
        title: "#000",
        text: "#000",
        inverse: "#fff",
        muted: "rgba(0, 0, 0, 0.667)",
        inactive: "rgba(0, 0, 0, 0.33)",
        link: "#000",
        linkHover: "rgba(0, 0, 0, 0.667)",
        border: "rgba(0, 0, 0, 0.07)",
        checkbox: "#C4C4C4",
        radio: "#C4C4C4",
        warning: "#FC8C0B",
        error: "#D80228",
        negative: "#D80228",
        notification: "#FE475F",
      },
      boxShadow: {
        border: "0px 0.5px 0px #CBCBCB",
        border_double: "0px -0.5px 0px #CBCBCB, 0px 0.5px 0px #CBCBCB",
        max: "16px 32px 128px 8px rgba(0, 0, 0, 0.07)",
        dropdown: "-112px 73px 191px 59px rgba(0, 0, 0, 0.09)",
        select: "40px 64px 128px -8px rgba(0, 0, 0, 0.14)",
        outline: "inset 0 0 0 1px rgba(9, 78, 253, 1)",
        std: "3px 9px 32px -4px rgb(0 0 0 / 7%)",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      inset: {
        center: "50%",
      },
      lineHeight: {
        title: "127%",
        text: "153.8%",
      },
      borderRadius: {
        "2sm": "8px",
        "3sm": "10px",
        "4sm": "12px",
        "5sm": "14px",
        "6sm": "16px",
      },
    },
    letterSpacing: {
      tighter: "-.007em",
      tight: "-.02em",
      normal: "0",
    },

    screens: {
      // mobile first -> (min-width:xxx)
      xs: `${pxToRem(320)}rem`,
      sm: `${pxToRem(576)}rem`,
      md: `${pxToRem(768)}rem`,
      lg: `${pxToRem(1024)}rem`,
      xl: `${pxToRem(1380)}rem`,
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};

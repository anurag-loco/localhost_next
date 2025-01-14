/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "#7a7a7a",
          "300": "rgba(0, 0, 0, 0.85)",
        },
        "light-grey-border": "#e8ecf2",
        black: "#000",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#f4f4f4",
          "300": "#ececec",
        },
        dark: "#171e1d",
        white: "#fff",
        "light-text": "#787878",
        accent: "#00c29f",
        gainsboro: "#d9d9d9",
        saddlebrown: "#975b00",
        lightcyan: "#defff9",
      },
      spacing: {},
      fontFamily: {
        archivo: "Archivo",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        smi: "13px",
        "4xs": "9px",
        "6xs": "7px",
        mid: "17px",
        "9xs-5": "3.5px",
        "12xs-5": "0.5px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      lgi: "19px",
      xs: "12px",
      "21xl-4": "40.4px",
      "13xl": "32px",
      "5xl": "24px",
      "7xl": "26px",
      "2xl": "21px",
      "3xs": "10px",
      lg: "18px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "4xl": "23px",
      inherit: "inherit",
    },
    screens: {
      mq1440: {
        raw: "screen and (max-width: 1440px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

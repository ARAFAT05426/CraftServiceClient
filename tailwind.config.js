<<<<<<< HEAD
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        common: `'Barlow Condensed', sans-serif`,
        sideHeading: `"Alfa Slab One", serif`,
      },
      boxShadow: {
        custom: '0px 6px 0px 0px',
=======
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        card_bg: "#364F63",
        nav_bg: "#1B2A37",
        footer_bg : "#1B2A37 ",
        btn_bg: "#446680",
        hover_bg: "#2E4255"
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
<<<<<<< HEAD
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3498db",
          secondary: "#2980b9",
          accent: "#2c3e50",
          text: "#2c3e50",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#000087", 
          secondary: "#2980b9",
          accent: "#2c3e50",
          text: "#ecf0f1",
        },
      },
    ],
  }
};
=======
    themes: ["light", "dark"],
  }
}
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8

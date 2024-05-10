/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        nav_h_minus: "calc(100vh - 64px)",
      },
      fontFamily: {
        common: `Barlow Condensed', sans-serif`
      },
      boxShadow: {
        custom: '0px 6px 0px 0px', // Custom box shadow size without color
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
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

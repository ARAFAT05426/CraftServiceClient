/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        nav_h_minus: "calc(100vh - 64px)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ "light", "dark"
      // {
      //   light: {
      //     ...require("daisyui/src/theming/themes")["light"],
      //     "primary" : "black"
      //   },
      //   dark: {
      //     ...require("daisyui/src/theming/themes")["dark"],
      //     "primary" : "green"
      //   }
      // },
    ]
  },
};

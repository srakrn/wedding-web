/** @type {import("tailwindcss").Config} */
export default {
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      "sans": ['"IBM Plex Sans Thai Looped"'],
      "display": ['"IBM Plex Sans Thai"'],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        ft: {
          "primary": "#27594b",
          "secondary": "#659157",
          "accent": "#e07400",
          "neutral": "#281b16",
          "base-100": "#f3f4f6",
          "info": "#3abff8",
          "success": "#659157",
          "warning": "#f8cc18",
          "error": "#f87272",
        },
      }
    ],
    darkTheme: "ft",
  },
}


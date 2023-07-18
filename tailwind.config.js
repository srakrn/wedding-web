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
    themes: ["garden"],
    darkTheme: "garden",
  },
}


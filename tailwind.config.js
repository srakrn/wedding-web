/** @type {import("tailwindcss").Config} */
export default {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      "sans": ['"IBM Plex Sans Thai Looped"'],
      "display": ['"IBM Plex Sans Thai"'],
      "body": ['"IBM Plex Sans Thai Looped"'],
    },
    extend: {},
  },
  daisyui: {
    themes: ["garden"],
    darkTheme: "garden",
  },
}


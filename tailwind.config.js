/** @type {import("tailwindcss").Config} */
export default {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      "display": ["IBM Plex Sans Thai"],
      "body": ["IBM Plex Sans Thai Looped"],
    },
    extend: {},
  },
  daisyui: {
    themes: ["garden"],
    darkTheme: "garden",
  },
}


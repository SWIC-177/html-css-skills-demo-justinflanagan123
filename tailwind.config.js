/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    color: {},
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

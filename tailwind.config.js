/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{html,js,ts,jsx,tsx,vue}",
    "./fragments/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          "1": "#fff",
          "2": "#fafafa",
          "3": "#f1f1f1",
          "4": "#f1f5f9"
        },
        blue: {
          "2": "#02274F",
        },
      },
      height: {
        "profile_page_size": "calc((100vh) - (74px))"
      },
      boxShadow: {
        "form_box_shadow": "0px 0px 64px 0px rgba(0,0,0,0.25)",
        "profile_box_shadow": "0px 2px 10px 0px rgba(0, 0, 0, 0.1)"
      },
    },
  },
  plugins: [],
}
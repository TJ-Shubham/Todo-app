/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage:{
        "hero-mobile-dark":"url('/bg-mobile-dark.jpg')",
        "hero-mobile-light":"url('/bg-mobile-light.jpg')",
        "hero-desktop-dark":"url('/bg-desktop-dark.jpg')",
        "hero-desktop-light":"url('/bg-desktop-light.jpg')",
        "button-gradient":"linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
      colors:{

        //primary
        "bright-blue":"hsl(220, 98%, 61%)",

        // Light Theme
        "light-gray": "hsl(0, 0%, 98%)",
        "light-blue": "hsl(236, 33%, 92%)",
        "light-graylish-blue": "hsl(233, 11%, 84%)",
        "light-dark-blue": "hsl(236, 9%, 61%)",
        "light-dark-graylish-blue": "hsl(235, 19%, 35%)",

        // Dark Theme
        "dark-blue": "hsl(235, 21%, 11%)",
        "dark-saturated-blue": "hsl(235, 24%, 19%)",
        "dark-graylish-blue": "hsl(234, 39%, 85%)",
        "dark-graylish-blue-hover": "hsl(236, 33%, 92%)",
        "dark-graylish-blue-secondary": "hsl(234, 11%, 52%)",
        "dark-graylish-blue-third": "hsl(233, 14%, 35%)",
        "dark-graylish-blue-fourth": "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
}


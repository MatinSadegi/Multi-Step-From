/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans - serif"],
      },
      backgroundImage: {
        "sidebar-desktop": "url('/src/assets/images/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('/src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};

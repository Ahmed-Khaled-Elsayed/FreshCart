const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */


export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        "main" : "#0aad0a",
        "second" : "#F8F9FA"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}


 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      screens:{
        tablet:{max:"1024px"},
        mobile:{max:"576px"},
      },
     },
   },
   plugins: [],
 }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d39e43",
        
"secondary": "#1bad6e",
        
"accent": "#233482",
        
"neutral": "#1E1C26",
        
"base-100": "#E5E4E7",
        
"info": "#90D1EE",
        
"success": "#3CE281",
        
"warning": "#AB6112",
        
"error": "#DF4360",
        },
      },
    ],
  },
 
   
  plugins: [require("daisyui")],

};

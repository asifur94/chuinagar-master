/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      colors :{
        red: "#C31F3A",
        secondaryRed: "#FAD8DE",
      },
      fontSize: {
        xs : ['13px' , '15.85px'],
        sm: ['18px', '21.94px'],
        base: ['26px', '31.69px'],
        lg: ['36px', '43.88px'],
        // xl: ['24px', '32px'],
      },
      screens: {
        'xm': "430px",
        'xs' : "490px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'mxl': '1425px',
        '2xl': '1576px',
      }
    },
  },
  plugins: [],
}


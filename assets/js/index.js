// BASE FOR ALL JS FILES

tailwind.config = {
  content: [
    "./index.html",
    "./assets/js/**/*.js",
    "./assets/css/**/*.css",
    "../../pages/**/*.html",
  ],

  darkMode: 'class',

  theme: {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
    },
    extend: {
        colors: {
            // #09090b',
            dark: '#1d232a',
            accent: '#6d28d9',
        },
        fontFamily: {
            // sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            poppins: ['Poppins', 'sans-serif'],
        },
    },
},
};

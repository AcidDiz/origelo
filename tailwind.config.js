const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
                alatsi: ["Alatsi", ...defaultTheme.fontFamily.sans],
                oswald: ["Oswald", ...defaultTheme.fontFamily.sans],
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
                inter: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
        backgroundImage: {
            "hero-pattern": "url(storage/images/home-hero-design.jpg)",
        },
        colors: {
            transparent: "transparent",
            white: "#FFFFFF",
            black: "#000000",
            gray: colors.gray,
            red: colors.red,
            amber: colors.amber,
            sky: colors.sky,
            orange: colors.orange,
            blue: colors.blue,
            green: colors.green,
            yellow: colors.yellow,
            pink: colors.pink,


            seagreen: {
                DEFAULT: "#2A3F54",
                50: "#95AFCA",
                100: "#87A5C3",
                200: "#6C91B5",
                300: "#537CA6",
                400: "#45688A",
                500: "#38536F",
                600: "#2A3F54",
                700: "#17232F",
                800: "#050709",
                900: "#000000",
            },
            'warning': {
                DEFAULT: '#FF9F43',
                '50': '#FFFDFB',
                '100': '#FFF2E6',
                '200': '#FFDEBD',
                '300': '#FFC995',
                '400': '#FFB46C',
                '500': '#FF9F43',
                '600': '#FF820B',
                '700': '#D26700',
                '800': '#9A4B00',
                '900': '#623000'
            },

            'danger': {
                DEFAULT: '#D63031',
                '50': '#F4C9CA',
                '100': '#F1B8B9',
                '200': '#EA9697',
                '300': '#E37475',
                '400': '#DD5253',
                '500': '#D63031',
                '600': '#AC2223',
                '700': '#7D1919',
                '800': '#4E0F10',
                '900': '#1F0606'
            },

            'pool': {
                DEFAULT: '#01A3A4',
                '50': '#5FFDFE',
                '100': '#4AFDFE',
                '200': '#22FCFE',
                '300': '#01F4F5',
                '400': '#01CBCD',
                '500': '#01A3A4',
                '600': '#016C6C',
                '700': '#003434',
                '800': '#000000',
                '900': '#000000'
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require('tw-elements/dist/plugin')],
};

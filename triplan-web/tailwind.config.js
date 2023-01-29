/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            animation: {
                "move-in": "move 0.5s ease-in",
                "tab-expand": "tabExpand 1s ease-in",
            },
            keyframes: {
                move: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                tabExpand: {
                    "0%": { width: "6rem" },
                    "100%": { width: "33%" },
                },
            },
            scale: {
                102: "1.02",
            },
            colors: {
                tricolorgreen: "#00c4cc",
            },
        },
    },
    plugins: [],
};

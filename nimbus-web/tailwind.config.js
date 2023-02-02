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
                "move-in": "moveIn 0.5s ease-in",
                "tab-expand": "tabExpand 1s ease-in",
                "move-out": "moveOut 0.5s ease-in",
                "graph-expand": "graphExpand 1s ",
                "graph-collapse": "graphCollapse 1s",
                "fade-in": "fadeIn 1s",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0%" },
                    "100%": { opacity: "100%" },
                },
                moveIn: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                moveOut: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": {
                        transform: "translateX(-100%)",
                    },
                },
                graphExpand: {
                    " 0%": { gap: "0" },
                    " 100%": { gap: "5rem" },
                },
                graphCollapse: {
                    " 0%": { gap: "5rem", opacity: "100%" },
                    " 100%": { gap: "0", opacity: "0%" },
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

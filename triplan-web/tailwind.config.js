/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				"fade-in": "fade 0.3s ease-in",
			},
			keyframes: {
				fade: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};

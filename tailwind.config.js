/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				HaasRg: ['NHaasGroteskRg', 'sans-serif'],
				HaasMd: ['NHaasGroteskMd', 'sans-serif'],
				HaasBd: ['NHaasGroteskBd', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

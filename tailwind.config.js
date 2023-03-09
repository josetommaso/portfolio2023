/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#2D4263',
				secondary: '#C84B31',
				light: '#ECDBBA',
				dark: '#191919',
			},
		},
	},
	screens: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1192px',
	},
	plugins: [],
};

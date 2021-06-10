module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./css/**/*.{js,ts,jsx,tsx,css}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'clouds-patter':
					"url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')",
			}),
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
		display: ['responsive', 'group-hover', 'group-focus'],
	},
	plugins: [],
};

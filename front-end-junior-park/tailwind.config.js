/** @type {import('tailwindcss').Config} */

const twColor = require('tailwindcss/colors')

const colors = { transparent: tsColor.transparent,
black: '#222528',
white: twColor.black,
primary: '#F2B236',
secondary: '#E8ECEB',
'bg-color': '#E8ECEB'

}

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
    colors,
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				barlow: ['Barlow Semi Condensed', 'sans-serif']
			},
			backgroundImage: {
				'scissors-gradient': 'radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
				'paper-gradient': 'radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
				'rock-gradient': 'radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
				'lizard-gradient': 'radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
				'cyan-gradient': 'radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
				'radial-gradient': 'radial-gradient(hsl(215, 47%, 22%), hsl(230, 47%, 17%))',
				'winner-gradient':
					'radial-gradient(hsla(180, 100%, 99%, 0.25) 0%, hsla(180, 100%, 99%, 0) 70%)'
			},
			backgroundSize: {
				'200vh': '200vh 200vh'
			},
			colors: {
				font: 'hsl(180, 100%, 99%)',
				grey: 'hsl(226, 15%, 60%)',
				dark: 'hsl(229, 25%, 31%)',
				score: 'hsl(229, 64%, 46%)',
				'dark-slate-gray': 'hsl(220, 45%, 19%)',
				'header-outline': 'hsl(217, 16%, 45%)'
			},
			boxShadow: {
				'button-inner': 'inset 0 8px 0 -4px var(--tw-shadow-colored)',
				'button-outer': 'inset 0 -6px 0 -1px var(--tw-shadow-colored)'
			}
		}
	},
	plugins: []
};

import confetti from 'canvas-confetti';
import type { Options } from '../types';

export function randomizeButton() {
	const buttons: Options[] = ['rock', 'paper', 'scissors'];
	const randomIndex = Math.floor(Math.random() * buttons.length);
	console.log('Math.random():', Math.floor(Math.random() * buttons.length));
	return buttons[randomIndex];
}

export function getWinner(player: Options | undefined, computer: Options | undefined) {
	if (!player || !computer) return;
	if (player === computer) {
		return 'draw';
	} else if (
		(player === 'rock' && computer === 'scissors') ||
		(player === 'paper' && computer === 'rock') ||
		(player === 'scissors' && computer === 'paper')
	) {
		return 'player';
	} else {
		return 'computer';
	}
}

export function fireConfetti() {
	confetti({
		angle: 70,
		spread: 30,
		shapes: ['square', 'circle', 'star'],
		startVelocity: 60,
		particleCount: 50,
		origin: { y: 1, x: 0 }
	});

	confetti({
		angle: 110,
		spread: 30,
		shapes: ['square', 'circle', 'star'],
		startVelocity: 60,
		particleCount: 50,
		origin: { y: 1, x: 1 }
	});
}

<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '../components/Button.svelte';
	import Header from '../components/Header.svelte';
	import type { Options } from '../types';
	import { fireConfetti, getWinner, randomizeButton } from '../utils';

	let score = 0;
	let result: 'player' | 'computer' | 'draw' | undefined = undefined;
	let roundStarted: boolean = false;
	let playerChosenButton: Options | undefined = undefined;
	let computerChosenButton: Options | undefined = undefined;

	function handleGameButtonClick(event: CustomEvent) {
		roundStarted = true;
		playerChosenButton = event.detail.color;

		setTimeout(() => {
			computerChosenButton = randomizeButton();
			result = getWinner(playerChosenButton, computerChosenButton);
			if (result === 'player') {
				score++;

				fireConfetti();
			} else if (result === 'computer') {
				score--;
			}
		}, 2000);
	}

	function handleResetButtonClick() {
		roundStarted = false;
		playerChosenButton = undefined;
		computerChosenButton = undefined;
	}
</script>

<Header {score} />

<div class="relative w-80 h-80">
	<!-- Lines behind buttons -->
	{#if !Boolean(playerChosenButton)}
		<svg
			transition:fade={{ duration: 400 }}
			class="absolute w-48 h-48 transition-opacity duration-1000 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
			viewBox="0 0 313 278"
			width="313"
			height="278"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path class="stroke-[30]" stroke="#000" fill="none" opacity=".2" d="M156.5 262 300 8H13z" />
		</svg>
	{/if}

	<!-- Player button rock -->
	{#if roundStarted === false || playerChosenButton === undefined || playerChosenButton === 'rock'}
		<Button
			on:click={handleGameButtonClick}
			class={`top-6 left-1/4 -translate-x-1/2`}
			color="rock"
			chosen={Boolean(playerChosenButton)}
		/>
	{/if}

	<!-- Player button paper -->
	{#if roundStarted === false || playerChosenButton === undefined || playerChosenButton === 'paper' || computerChosenButton === 'paper'}
		<Button
			on:click={handleGameButtonClick}
			class={`top-6 ${
				playerChosenButton === 'paper' ? 'right-3/4 translate-x-1/2 duration-500' : 'right-6'
			}`}
			color="paper"
			chosen={Boolean(playerChosenButton)}
		/>
	{/if}

	<!-- Player button scissors -->
	{#if roundStarted === false || playerChosenButton === undefined || playerChosenButton === 'scissors'}
		<Button
			on:click={handleGameButtonClick}
			class={`-translate-x-1/2 ${
				playerChosenButton === 'scissors'
					? 'bottom-[calc(100%-8.5rem)] left-1/4 duration-500'
					: 'bottom-6 left-1/2'
			}`}
			color="scissors"
			chosen={Boolean(playerChosenButton)}
		/>
	{/if}

	<!-- Computer button -->
	{#if roundStarted === true && computerChosenButton !== undefined}
		<Button
			class={`top-6 right-6`}
			color={computerChosenButton}
			chosen={Boolean(computerChosenButton)}
		/>
	{/if}

	<!-- Placeholder for the button that will be chosen by the computer -->
	{#if Boolean(roundStarted) && !Boolean(computerChosenButton)}
		<div
			in:fade={{ duration: 500, delay: 250 }}
			out:fade={{ duration: 0, delay: 0 }}
			class="absolute -translate-x-1/2 rounded-full bg-dark-slate-gray top-[38px] left-3/4 w-[84px] h-[84px]"
		/>
	{/if}

	<!-- Texts that appear after the player has chosen a button -->
	{#if Boolean(playerChosenButton)}
		<p
			in:fade={{ duration: 250, delay: 1000 }}
			out:fade={{ duration: 100 }}
			class="absolute text-sm tracking-widest uppercase -translate-x-1/2 whitespace-nowrap top-40 left-1/4"
		>
			you picked
		</p>
		<p
			in:fade={{ duration: 250, delay: 1000 }}
			out:fade={{ duration: 100 }}
			class="absolute text-sm tracking-widest uppercase -translate-x-1/2 whitespace-nowrap left-3/4 top-40"
		>
			the house picked
		</p>
	{/if}
</div>

<div class="flex min-h-[128px] flex-col gap-4">
	{#if Boolean(playerChosenButton) && Boolean(computerChosenButton) && Boolean(result)}
		<h2 class="text-6xl text-center text-white uppercase">
			{#if result === 'player'}
				you win
			{:else if result === 'computer'}
				you lose
			{:else if result === 'draw'}
				draw
			{/if}
		</h2>
		<button
			class="px-10 py-3 tracking-widest uppercase rounded-lg text-xl bg-font text-dark enabled:focus:outline-dashed enabled:focus:outline-font enabled:focus:outline-offset-4 enabled:focus:outline-[3px] enabled:hover:-rotate-2 enabled:hover:scale-110 enabled:focus:-rotate-2 enabled:focus:scale-110 transition-transform"
			on:click={() => handleResetButtonClick()}
		>
			play again
		</button>
	{/if}
</div>

<button
	class="absolute left-1/2 -translate-x-1/2 bottom-10 px-10 py-1 text-lg tracking-widest uppercase bg-transparent border-[3px] rounded-lg border-header-outline text-font enabled:focus:outline-dashed enabled:focus:outline-font enabled:focus:outline-offset-4 enabled:focus:outline-[3px]"
>
	rules
</button>

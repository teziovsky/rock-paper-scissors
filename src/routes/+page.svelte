<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '$components/Button.svelte';
	import Header from '$components/Header.svelte';
	import Rules from '$components/Rules.svelte';
	import type { Options } from '$types';
	import { fireConfetti, getWinner, randomizeButton } from '$utils';

	let score = 0;
	let result: 'player' | 'computer' | 'draw' | undefined = undefined;
	let roundStarted = false;
	let playerChosenButton: Options | undefined = undefined;
	let computerChosenButton: Options | undefined = undefined;

	let showRules = false;

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
		result = undefined;
		roundStarted = false;
		playerChosenButton = undefined;
		computerChosenButton = undefined;
	}

	function handleRulesButtonClick() {
		showRules = !showRules;
	}

	function handleRulesCloseClick() {
		showRules = false;
	}
</script>

<Header {score} />

<div class="relative w-72 h-72 sm:w-80 md:w-full md:max-w-2xl sm:h-80 md:h-96">
	<!-- Lines behind buttons -->
	{#if !playerChosenButton}
		<svg
			transition:fade={{ duration: 400 }}
			class="absolute w-48 h-48 transition-opacity duration-1000 -translate-x-1/2 -translate-y-1/2 md:w-60 md:h-60 top-1/2 left-1/2"
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
			class={`top-6 left-6 ${
				playerChosenButton === 'rock' ? 'md:top-1/2 md:left-0 md:-translate-y-1/2' : 'md:left-36'
			}`}
			color="rock"
			chosen={Boolean(playerChosenButton)}
			winner={Boolean(result === 'player')}
		/>
	{/if}

	<!-- Player button paper -->
	{#if roundStarted === false || playerChosenButton === undefined || playerChosenButton === 'paper'}
		<Button
			on:click={handleGameButtonClick}
			class={`top-6 ${
				playerChosenButton === 'paper'
					? 'right-3/4 translate-x-1/2 duration-500 md:right-full md:translate-x-full md:top-1/2 md:-translate-y-1/2'
					: 'right-6 md:right-36'
			}`}
			color="paper"
			chosen={Boolean(playerChosenButton)}
			winner={Boolean(result === 'player')}
		/>
	{/if}

	<!-- Player button scissors -->
	{#if roundStarted === false || playerChosenButton === undefined || playerChosenButton === 'scissors'}
		<Button
			on:click={handleGameButtonClick}
			class={`-translate-x-1/2 ${
				playerChosenButton === 'scissors'
					? 'bottom-[calc(100%-8.5rem)] md:left-0 md:bottom-1/2 md:translate-x-0 md:translate-y-1/2 left-1/4 duration-500'
					: 'bottom-6 left-1/2'
			}`}
			color="scissors"
			chosen={Boolean(playerChosenButton)}
			winner={Boolean(result === 'player')}
		/>
	{/if}

	<!-- Computer button -->
	{#if roundStarted === true && computerChosenButton !== undefined}
		<Button
			class={`top-6 right-6 ${
				computerChosenButton ? 'md:top-1/2 md:-translate-y-1/2 md:right-0' : ''
			}`}
			color={computerChosenButton}
			chosen={Boolean(computerChosenButton)}
			winner={Boolean(result === 'computer')}
		/>
	{/if}

	<!-- Placeholder for the button that will be chosen by the computer -->
	{#if Boolean(roundStarted) && !computerChosenButton}
		<div
			in:fade={{ duration: 500, delay: 250 }}
			out:fade={{ duration: 0, delay: 0 }}
			class="absolute -translate-x-1/2 rounded-full bg-dark-slate-gray top-[38px] md:top-1/2 md:left-[calc(100%-80px)] md:-translate-y-1/2 left-3/4 w-[84px] md:w-[108px] md:h-[108px] h-[84px]"
		/>
	{/if}

	<!-- Texts that appear after the player has chosen a button -->
	{#if Boolean(playerChosenButton)}
		<p
			in:fade={{ duration: 250, delay: 1000 }}
			out:fade={{ duration: 100 }}
			class="absolute text-sm tracking-widest uppercase -translate-x-1/2 whitespace-nowrap md:text-xl md:left-8 md:translate-x-0 top-40 md:top-80 left-1/4"
		>
			you picked
		</p>
		<p
			in:fade={{ duration: 250, delay: 1000 }}
			out:fade={{ duration: 100 }}
			class="absolute text-sm tracking-widest uppercase -translate-x-1/2 whitespace-nowrap left-[74%] md:translate-x-0 top-40 md:top-80 md:text-xl"
		>
			the house picked
		</p>
	{/if}
</div>

<div class="md:absolute flex min-h-[128px] md:top-[47%] md:-translate-y-1/2 flex-col gap-4">
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
			class="px-10 py-3 tracking-widest uppercase rounded-lg text-xl bg-font text-dark enabled:focus-within:outline-dashed enabled:focus-within:outline-font enabled:focus-within:outline-offset-4 enabled:focus-within:outline-[3px] enabled:hover:-rotate-2 enabled:hover:scale-110 enabled:focus-within:-rotate-2 enabled:focus-within:scale-110 transition-transform"
			on:click={() => handleResetButtonClick()}
		>
			play again
		</button>
	{/if}
</div>

<button
	class="absolute left-1/2 -translate-x-1/2 bottom-10 px-10 py-1 text-lg tracking-widest uppercase bg-transparent border-[3px] rounded-lg border-header-outline text-font enabled:focus-within:outline-dashed enabled:focus-within:outline-font enabled:focus-within:outline-offset-4 enabled:focus-within:outline-[3px] enabled:hover:rotate-2 enabled:hover:scale-110 enabled:focus-within:rotate-2 enabled:focus-within:scale-110 transition-transform"
	on:click={() => handleRulesButtonClick()}
>
	rules
</button>

<Rules on:close={handleRulesCloseClick} {showRules} />

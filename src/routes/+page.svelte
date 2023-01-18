<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Options } from '../types';
	import Header from '../components/Header.svelte';
	import Button from '../components/Button.svelte';

	let playerChosenButton: Options | undefined = undefined;
	let computerChosenButton: Options | undefined = undefined;

	function handleGameButtonClick(event: CustomEvent) {
		playerChosenButton = event.detail.color;
	}

	function handleResetButtonClick() {
		playerChosenButton = undefined;
	}
</script>

<Header />

<div class="relative w-80 h-80">
	{#if !Boolean(playerChosenButton)}
		<svg
			transition:fade={{ duration: 1000 }}
			class="absolute w-48 h-48 transition-opacity duration-1000 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
			viewBox="0 0 313 278"
			width="313"
			height="278"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path class="stroke-[30]" stroke="#000" fill="none" opacity=".2" d="M156.5 262 300 8H13z" />
		</svg>
	{/if}
	<Button
		on:click={handleGameButtonClick}
		class={`${
			playerChosenButton === 'paper'
				? 'top-6 left-1/4 -translate-x-1/2 duration-700'
				: 'top-6 left-6'
		}`}
		color="paper"
		chosen={Boolean(playerChosenButton)}
	>
		<svg
			class="relative z-20 w-10 h-10"
			xmlns="http://www.w3.org/2000/svg"
			width="49"
			height="59"
			viewBox="0 0 49 59"
		>
			<path
				fill="#3B4262"
				d="M47.125 11.832a2.922 2.922 0 00-1.232-.198c-.57.04-1.029.271-1.302.65-1.604 2.248-2.919 6.493-3.979 9.905-.486 1.577-1.14 3.688-1.612 4.69-.493-2.807.064-13.09.28-17.05l.003-.064c.15-2.751.17-3.234.138-3.446-.238-1.509-.843-2.5-1.799-2.943-.966-.45-2.22-.25-3.572.563-.677.41-.865 1.816-1.446 8.19l-.002.028c-.32 3.502-1.058 11.566-1.965 12.91-1.023-1.88-2.431-12.555-3.039-17.176-.425-3.236-.673-5.094-.84-5.655-.35-1.176-1.83-2.176-3.295-2.232-1.22-.06-2.22.56-2.698 1.638-.894.995-.578 4.292.41 12.102.47 3.718 1.44 11.395.83 12.257-1.219-.133-3.31-4.942-6.215-14.299-.816-2.62-1.068-3.408-1.318-3.753-.494-1.202-2.172-2.129-3.676-2.024a3.183 3.183 0 00-.377.049c-.787.156-2.584.881-2.2 4.226 1.06 4.637 2.213 8.041 3.331 11.346l.023.066c.669 1.98 1.302 3.85 1.89 5.925 1.385 4.9.846 7.94.84 7.975-.046.312-.143.503-.288.57a.556.556 0 01-.195.045c-.44.03-1.098-.26-1.437-.45-.776-1.482-4.636-8.544-8.134-9.524l-.126-.037-.127.012c-1.283.121-2.226.606-2.803 1.441-.914 1.32-.535 3.002-.444 3.34l.052.12c.028.051 2.834 5.165 3.268 7.544.374 2.04 2.311 4.25 3.869 6.026l.064.073c.508.58.946 1.083 1.292 1.548 4.519 4.713 11.665 8.677 11.723 8.71.892.657 1.387 1.293 1.44 1.84a.798.798 0 01-.16.58l-.155.162.988.96 18.853-1.324.804-3.684c2.486-10.402 1.967-19.272 1.958-19.33.01-.327.706-3.483 1.266-6.033l.017-.065c1.117-5.08 2.505-11.4 2.772-13.803.116-1.028-.542-1.972-1.675-2.401z"
			/>
		</svg>
	</Button>
	<Button
		on:click={handleGameButtonClick}
		class={`${
			playerChosenButton === 'scissors'
				? 'top-1/2 right-3/4 -translate-y-1/2 translate-x-1/2 duration-700'
				: 'top-6 right-6'
		}`}
		color="scissors"
		chosen={Boolean(playerChosenButton)}
	>
		<svg
			class="relative z-20 w-10 h-10"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 51 58"
			width="51"
			height="58"
		>
			<path
				fill="#3B4262"
				d="M13.971 25.702l6.012-8.415c-2.499-.415-7.088-.507-10.846 3.235C3.212 26.421.812 39.163.312 42.248L15.37 57.24c2.711-.232 14.713-1.827 26.279-13.34.122-.249 2.94-2.321.636-4.614-1.1-1.095-2.919-1.074-4.042.044-.572.57-1.461.577-2.021.02-.56-.557-.552-1.443.02-2.012l4.087-4.069c2.076-2.067.119-5.555-2.78-4.717l-3.345 2.851c-.611.53-1.52.439-2.022-.14-.519-.597-.408-1.503.183-2.013 11.687-10.208 9.98-8.979 17.5-15.995 2.809-2.329-.725-6.447-3.493-4.09L28.182 25.45c-.529.448-1.34.457-1.86-.02-.601-.517-.615-1.262-.222-1.85L38.787 3.944c1.854-2.5-1.795-5.277-3.749-2.757L16.28 27.307c-.452.65-1.364.8-1.985.345a1.377 1.377 0 01-.323-1.95z"
			/>
		</svg>
	</Button>
	<Button
		on:click={handleGameButtonClick}
		class={`${
			playerChosenButton === 'rock'
				? 'bottom-1/2 left-1/4 translate-y-1/2 -translate-x-1/2 duration-700'
				: '-translate-x-1/2 bottom-6 left-1/2'
		}`}
		color="rock"
		chosen={Boolean(playerChosenButton)}
	>
		<svg
			class="relative z-20 w-10 h-10"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width="48"
			height="48"
		>
			<path
				fill="#3B4262"
				d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"
			/>
		</svg>
	</Button>

	{#if Boolean(playerChosenButton)}
		<p
			transition:fade={{ duration: 1000 }}
			class="absolute text-sm tracking-widest uppercase top-40 left-9"
		>
			you picked
		</p>
		<p
			transition:fade={{ duration: 1000 }}
			class="absolute text-sm tracking-widest uppercase right-4 top-40"
		>
			the house picked
		</p>
	{/if}
</div>

<div class="flex min-h-[128px] flex-col gap-4">
	{#if Boolean(playerChosenButton) && Boolean(computerChosenButton)}
		<h2 class="text-6xl text-white uppercase">you lose</h2>
		<button
			class="px-10 py-3 tracking-widest uppercase rounded-lg text-xl bg-font text-dark enabled:focus:outline-dashed enabled:focus:outline-font enabled:focus:outline-offset-4 enabled:focus:outline-[3px]"
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

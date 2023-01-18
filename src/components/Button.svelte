<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Options } from '../types';

	const dispatch = createEventDispatcher();

	export let color: Options;
	export let chosen: boolean = false;

	export let className: string | undefined;
	export { className as class };

	function handleClick() {
		dispatch('click', {
			color
		});
	}
</script>

<button
	class={`bg-${color}-gradient absolute shadow-button-outer transition-all duration-200 transform enabled:hover:rotate-45 enabled:hover:-translate-y-4 enabled:focus:-translate-y-4 enabled:focus-within:rotate-45 enabled:focus-within:-translate-y-6 shadow-dark/50 flex items-center justify-center w-28 h-28 rounded-full after:content-[''] after:w-3/4 after:h-3/4 enabled:focus-within:outline-dashed enabled:focus-within:outline-font enabled:focus-within:outline-offset-4 enabled:focus-within:outline-4 after:absolute after:shadow-button-inner after:shadow-black/10 after:rounded-full after:bg-white after:z-10 after:block ${
		className || ''
	}`}
	disabled={chosen}
	aria-label={`Choose ${color}`}
	on:click={handleClick}
>
	<slot />
</button>

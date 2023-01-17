<script lang="ts">
	export let color: 'paper' | 'scissor' | 'rock' = 'paper';
</script>

<button
	class="relative shadow-button-outer transition-transform transform hover:-translate-y-2 focus:-translate-y-2 shadow-dark/50 flex items-center justify-center w-28 h-28 rounded-full before:content-[''] before:w-3/4 before:h-3/4 before:absolute before:shadow-button-inner before:shadow-black/10 before:rounded-full before:bg-white before:z-10 before:block"
	class:bg-paper-gradient={color === 'paper'}
	class:bg-scissor-gradient={color === 'scissor'}
	class:bg-rock-gradient={color === 'rock'}
>
	<slot />
</button>

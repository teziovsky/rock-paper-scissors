<script lang="ts">
	export let score: number = 0;
</script>

<header
	class="flex items-center justify-between w-full max-w-sm py-3 pl-6 pr-4 mb-6 border-2 rounded-lg border-header-outline"
>
	<h1 class="flex flex-col text-xl font-bold leading-4 uppercase">
		<span>rock</span><span>paper</span><span>scissors</span>
	</h1>

	<div
		class="flex flex-col min-w-[90px] items-center justify-center px-5 py-2 bg-white rounded-md text-grey"
	>
		<span class="text-sm tracking-wider text-score">score</span>
		<span class="text-5xl font-bold text-dark">{score}</span>
	</div>
</header>

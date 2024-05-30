<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let alt: string;
	export let classes: string;
	export let transitionName: string;
	let loaded = false;
	let thisImage: any;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<img
	width="250"
	height="350"
	{src}
	{alt}
	bind:this={thisImage}
	class:loaded
	class="h-full w-full pointer-events-none {classes}"
/>

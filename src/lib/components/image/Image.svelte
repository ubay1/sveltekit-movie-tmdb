<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let alt: string;
	export let classes: string;
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
	class:loaded
	bind:this={thisImage}
	class="h-full w-full pointer-events-none {classes}"
/>

<style scoped>
	img {
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}
	img.loaded {
		opacity: 1;
	}
</style>

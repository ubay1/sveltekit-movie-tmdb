<script lang="ts">
	import IntersectionImage from './IntersectionImage.svelte';
	import Image from './Image.svelte';

	export let src: string;
	export let alt: string;
	export let classes: string;
	export let transitionName: string = '';
	let nativeLoading = false;
</script>

<IntersectionImage once={true} let:intersecting>
	{#if intersecting || nativeLoading}
		<Image {alt} {src} {classes} {transitionName} />
	{/if}
</IntersectionImage>

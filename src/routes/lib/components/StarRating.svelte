<script lang="ts">
	let maxRating = 100;
	export let rating: number = 0;

	$: compRating = Math.round(maxRating - Math.round(rating * 10));
</script>

<div class="relative aspect-11/2 {$$props.class}">
	<img src="/stars.webp" aria-hidden={true} class="absolute inset-0 w-full" alt="" />
	<img
		src="/stars-filled.webp"
		class="absolute inset-0 w-full"
		aria-hidden="true"
		alt=""
		style="clip-path: inset(0px {compRating}% 0px 0px)"
	/>
</div>

<style></style>

<script lang="ts">
	import type { TypeListMovie } from 'lib/types/movie';
	import { PUBLIC_POSTER_IMAGE_URL } from '$env/static/public';
	import ImageLoader from '../image/ImageLoader.svelte';
	import StarRating from '../StarRating.svelte';

	export let content: TypeListMovie[] = [];
</script>

<div class="flex gap-4 overflow-x-auto pb-6">
	{#each content as item, index}
		<div class="flex flex-col">
			<div class="w-230px h-370px bg-gray-9 p-1 rounded-md">
				<ImageLoader
					src={`${PUBLIC_POSTER_IMAGE_URL}/w342/${item.poster_path}`}
					alt="poster-{item.id}"
					classes="object-cover rounded-md"
				/>
			</div>
			<div class="mt-2">
				<div class="text-base">{item.title}</div>
				<div class="flex items-center gap-2">
					<StarRating rating={item.vote_average} class="w-20" />
					<div class="text-gray-4">{item.vote_average}</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<style></style>

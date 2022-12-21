<script lang="ts">
	import type { TypeListMovie } from 'lib/types/movie';
	import { PUBLIC_IMAGE_URL } from '$env/static/public';
	import ImageLoader from '../image/ImageLoader.svelte';
	import StarRating from '../StarRating.svelte';
	import { getListMoviePopular } from 'lib/apis/movie';
	import { onMount } from 'svelte';
	import LoadingListMovie from './LoadingListMovie.svelte';

	export let content: TypeListMovie[] | any = [];
	let isLoading: boolean = true;

	$: movie = getListMoviePopular();
	setTimeout(() => {
		isLoading = false;
		content = $movie?.data;
	}, 1000);
	onMount(() => {});
</script>

<div class="px-10 mt-6 mb-10">
	<div class="text-white text-2xl mb-4">Popular Movies</div>
	<div class="flex gap-4 overflow-x-auto pb-6">
		{#if isLoading}
			<LoadingListMovie />
		{:else}
			{#each content as item, index}
				<div class="flex flex-col">
					<div class="w-230px h-370px bg-gray-8 p-1 rounded-md">
						<ImageLoader
							src={`${PUBLIC_IMAGE_URL}/w342/${item.poster_path}`}
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
		{/if}
	</div>
</div>

<style></style>

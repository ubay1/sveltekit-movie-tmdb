<script lang="ts">
	import type { TypeListTv } from 'lib/types/movie';
	import { PUBLIC_IMAGE_URL } from '$env/static/public';
	import ImageLoader from '../image/ImageLoader.svelte';
	import StarRating from '../StarRating.svelte';
	import { getListTvPopular } from 'lib/apis/movie';
	import LoadingListMovie from './LoadingListMovie.svelte';

	export let content: TypeListTv[] | any = [];
	let isLoading: boolean = true;

	$: movie = getListTvPopular();
	setTimeout(() => {
		isLoading = false;
		content = $movie?.data;
	}, 1000);
</script>

<div class="px-10 mt-6 mb-10">
	<div class="text-white text-2xl mb-4">Popular TV</div>
	<div class="flex gap-4 overflow-x-auto pb-6">
		{#if isLoading}
			<LoadingListMovie />
		{:else}
			<div class="flex gap-4 overflow-x-auto pb-6">
				{#each content as item, index}
					<div class="flex flex-col">
						<div class="w-230px h-370px bg-gray-9 p-1 rounded-md">
							<ImageLoader
								src={`${PUBLIC_IMAGE_URL}/w342/${item.poster_path}`}
								alt="poster-{item.id}"
								classes="object-cover rounded-md"
							/>
						</div>
						<div class="mt-2">
							<div class="text-base line-clamp-1">{item.name}</div>
							<div class="flex items-center gap-2">
								<StarRating rating={item.vote_average} class="w-20" />
								<div class="text-gray-4">{item.vote_average}</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style></style>

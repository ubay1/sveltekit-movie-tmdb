<script lang="ts">
	import type { IListMovie, IListTv } from '../../types/movie';
	import ImageLoader from '../image/ImageLoader.svelte';
	import StarRating from '../StarRating.svelte';

	export let content: IListMovie[] & IListTv[] = [];
</script>

<div class="px-4 mt-6 mb-10 lt-xs:px-0">
	<div class="grid xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lt-xs:px-4">
		{#each content as item}
			<div data-sveltekit-preload-code class="mb-6 bg-gray-9 p-2 rounded-md">
				<a
					href="/{item.media_type === 'movie' ? 'movies' : 'tv'}/{item.id}"
					class="text-white decoration-none"
				>
					<div class="w-full h-370px rounded-md lt-xs:h-250px lt-md:h-300px">
						<ImageLoader
							src={`${
								item.poster_path
									? import.meta.env.VITE_PUBLIC_IMAGE_URL + 'w300/' + item.poster_path
									: ''
							}`}
							alt="poster-{item.id}"
							classes="object-cover rounded-t-md"
						/>
					</div>
					<div class="p-2">
						<div class="text-base font-light line-clamp-1">
							{item.media_type === 'tv' ? item?.original_name ?? '-' : item?.original_title ?? '-'}
						</div>
						<div class="flex items-center gap-2">
							<StarRating rating={item.vote_average} class="w-20" />
							<div class="text-gray-4 font-light text-sm">{item?.vote_average ?? 0}</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
		<!-- {/if} -->
	</div>
</div>

<style></style>

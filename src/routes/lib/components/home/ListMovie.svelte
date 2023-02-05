<script lang="ts">
	import type { IListMovie } from '../../types/movie';
	import ImageLoader from '../image/ImageLoader.svelte';
	import StarRating from '../StarRating.svelte';

	export let title: string;
	export let content: IListMovie[] | any = [];
</script>

<div class="px-10 mt-6 mb-10 lt-md:px-6">
	<div class="text-white text-2xl mb-4">{title}</div>
	<div class="flex gap-4 overflow-x-auto pb-6">
		{#each content as item}
			<div data-sveltekit-preload-code class="flex flex-col bg-gray-9 p-2 rounded-md">
				<a href="/movies/{item.id}" class="text-white decoration-none">
					<div class=" w-230px h-370px lt-md:w-200px lt-md:h-300px">
						<ImageLoader
							src={`${import.meta.env.VITE_PUBLIC_IMAGE_URL}w300/${item.poster_path}`}
							alt="poster-{item.id}"
							classes="object-cover rounded-md"
						/>
					</div>
					<div class="p-2">
						<div class="text-base font-light line-clamp-1">{item.title}</div>
						<div class="flex items-center gap-2">
							<StarRating rating={item.vote_average} class="w-20" />
							<div class="text-gray-4 font-light text-sm">{item.vote_average}</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style></style>

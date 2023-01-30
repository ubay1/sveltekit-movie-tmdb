<script lang="ts">
	import type { IDetailMovie } from 'lib/types/movie';
	import ImageLoader from '../image/ImageLoader.svelte';

	export let content: IDetailMovie;
</script>

<div class="mt-14 px-10 lt-md:px-6 lt-md:mt-4">
	<div class="mb-4 text-xl font-semibold">Posters</div>
	<div class="flex gap-2 overflow-x-auto overflow-y-hidden pb-10">
		{#each content.images.posters as image}
			<div class="flex flex-col">
				<div class=" w-230px h-300px bg-gray-8 lt-md:w-200px lt-md:h-300px">
					{#if image?.file_path}
						<ImageLoader
							src={`${import.meta.env.VITE_PUBLIC_IMAGE_URL}w300/${image.file_path}`}
							alt="poster-{content.id}"
							classes="object-cover"
						/>
					{:else}
						<div class="flex justify-center items-center h-full">Not Found</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<div class="mb-4 text-xl font-semibold">Backdrops</div>
	<div class="flex gap-2 overflow-x-auto overflow-y-hidden pb-10">
		{#each content.images.backdrops as image}
			<div class="flex flex-col">
				<div class=" w-230px h-300px bg-gray-8 lt-md:w-200px lt-md:h-300px">
					{#if image?.file_path}
						<ImageLoader
							src={`${import.meta.env.VITE_PUBLIC_IMAGE_URL}w300/${image.file_path}`}
							alt="poster-{content.id}"
							classes="object-cover"
						/>
					{:else}
						<div class="flex justify-center items-center h-full">Not Found</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<div class="mb-4 text-xl font-semibold">Logos</div>
	<div class="flex gap-2 overflow-x-auto overflow-y-hidden pb-10">
		{#each content.images.logos as image}
			<div class="flex flex-col">
				<div class=" w-230px h-300px bg-gray-8 lt-md:w-200px lt-md:h-300px">
					{#if image?.file_path}
						<ImageLoader
							src={`${import.meta.env.VITE_PUBLIC_IMAGE_URL}w300/${image.file_path}`}
							alt="poster-{content.id}"
							classes="object-cover"
						/>
					{:else}
						<div class="flex justify-center items-center h-full">Not Found</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style></style>

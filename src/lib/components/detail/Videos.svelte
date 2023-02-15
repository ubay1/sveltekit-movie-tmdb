<script lang="ts">
	import type { IDetailMovie } from 'lib/types/movie';
	import ImageLoader from '../image/ImageLoader.svelte';

	export let content: IDetailMovie;
</script>

<div class="mt-14 px-10 lt-md:px-6 lt-md:mt-4">
	<div class="mb-4 text-xl font-semibold">Videos</div>
	<div class="flex gap-2 overflow-x-auto overflow-y-hidden pb-10">
		{#each content.videos.results as video}
			<div class="flex flex-col">
				<div class=" w-230px h-300px bg-gray-8 lt-md:w-200px lt-md:h-300px">
					{#if video.site === 'YouTube'}
						<iframe
							loading="lazy"
							title="iframe video from youtube"
							height="400"
							class="w-full h-full"
							src={import.meta.env.VITE_SECRET_VIDEO_YOUTUBE + video.key}
						/>
					{:else}
						<iframe
							loading="lazy"
							title="iframe video from vimeo"
							class="w-full h-full"
							src={import.meta.env.VITE_SECRET_VIDEO_VIMEO + video.key}
						/>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style></style>

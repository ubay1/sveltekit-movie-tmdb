<script lang="ts">
	import { env } from '$env/dynamic/public';

	import type { TypeMovie } from 'lib/types/movie';

	export let content: TypeMovie[] = [];
</script>

<div class="w-full h-90 bg-gray-4 flex">
	{#each content as item, index}
		<div class="relative bg-black aspect-ratio-1/1 md:aspect-ratio-3/2 lg:aspect-ratio-25/9">
			<div class="absolute top-0 right-0 lt-lg:left-0 lg:bottom-0 lg:left-1/3 bg-gray-6">
				<img
					src={`${env.PUBLIC_BACKDROP_IMAGE_URL}/w780/${item.backdrop_path}`}
					alt="img-banner"
					width="400"
					height="250"
					class="w-full h-full object-cover"
				/>
			</div>
			<div
				class="absolute bottom-0 top-0 left-0 px-10 flex-col justify-center from-black
				via-black to-transparent lt-lg:bg-gradient-to-t lt-lg:right-0 lt-lg:p-10 lg:pl-25 lg:w-2/4 lg:bg-gradient-to-r"
			>
				<div>
					<h1>{item.title}</h1>
					<div class="flex gap-4">
						<div>{item.vote_count} Reviews</div>
						<div>{new Date(item.release_date).getFullYear()}</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

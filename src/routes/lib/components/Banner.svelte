<script lang="ts">
	import { PUBLIC_BACKDROP_IMAGE_URL } from '$env/static/public';
	import { FormatNumber, toHoursAndMinutes } from 'lib/helpers/format';
	import type { TypeBannerMovie } from 'lib/types/movie';
	import StarRating from './StarRating.svelte';

	export let content: TypeBannerMovie[] = [];
</script>

<div class="w-full h-90 bg-gray-7">
	{#each content as item, index}
		<div class="relative bg-black aspect-ratio-1/1 md:aspect-ratio-3/2 lg:aspect-ratio-25/9">
			<div class="absolute top-0 right-0 lt-lg:left-0 lg:bottom-0 lg:left-1/3 bg-gray-6">
				<img
					src={`${PUBLIC_BACKDROP_IMAGE_URL}/w780/${item.backdrop_path}`}
					alt="img-banner"
					width="400"
					height="250"
					class="w-full h-full object-cover bg-gray-7"
				/>
			</div>
			<div
				class="absolute bottom-0 top-0 left-0 px-10 flex-col justify-center from-black
				via-black to-transparent lt-lg:bg-gradient-to-t lt-lg:right-0 lt-lg:p-10 lg:pl-25 lg:w-2/4 lg:bg-gradient-to-r"
			>
				<div class="h-full flex justify-center flex-col">
					<div class="text-5xl font-semibold">{item.title}</div>
					<div class="flex gap-3 mt-4 mb-3">
						<StarRating rating={item.vote_average} />
						<div class="text-gray-5">{item.vote_average}</div>
						<div class="text-gray-5">{FormatNumber(item.vote_count)} Reviews</div>
						<div class="text-gray-5">{new Date(item.release_date).getFullYear()}</div>
						<div class="text-gray-5">{toHoursAndMinutes(item.runtime)}</div>
					</div>
					<div class="leading-6 pr-4 text-gray-3">
						{item.overview}
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

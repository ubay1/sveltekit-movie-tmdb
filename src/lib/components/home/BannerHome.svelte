<script lang="ts">
	import { formatNumber, toHoursAndMinutes } from '$lib/helpers/format';
	import type { IDetailMovie } from '$lib/types/movie';
	import ImageLoader from '../image/ImageLoader.svelte';
	import StarRating from '../StarRating.svelte';

	export let content: IDetailMovie;

	export let type: string = 'movies';
</script>

<svelte:head>
	<link
		rel="preload"
		as="image"
		href="{import.meta.env.VITE_PUBLIC_IMAGE_URL}w780/{content.backdrop_path}"
		type="image/jpg"
	/>
</svelte:head>

<div class="w-full bg-gray-8">
	<div data-sveltekit-preload-code class="relative bg-[#111111] h-400px">
		<a href="/{type}/{content.id}" class="text-white">
			<div
				class="absolute top-0 right-0 lt-lg:left-0 lt-lg:top-0 lg:bottom-0 lg:left-1/3 bg-gray-9"
			>
				<div class=" w-full h-400px lt-lg:h-300px">
					<ImageLoader
						src={`${import.meta.env.VITE_PUBLIC_IMAGE_URL}w780/${content.backdrop_path}`}
						alt="img-banner"
						classes="object-cover lt-lg:object-top border-none rounded-none"
					/>
				</div>
			</div>
			<div
				class="absolute bottom-0 top-0 left-0 px-10 flex-col justify-center from-black
					via-black to-transparent lt-md:px-6 lt-md:py-4 lt-lg:bg-gradient-to-t lt-lg:right-0 lt-lg:p-10 lg:w-3/4 lg:bg-gradient-to-r"
			>
				<div class="h-full flex justify-center flex-col lt-lg:justify-end lg:w-3/4">
					<div class="text-5xl font-semibold lt-md:text-4xl">{content.title}</div>
					<div class="flex gap-3 mt-4 mb-3 lt-md:flex-col">
						<div class="flex gap-2">
							<StarRating rating={content.vote_average} class="w-25" />
							<div class="text-gray-5">{content.vote_average.toFixed(1)}</div>
						</div>
						<div class="text-gray-5 font-light flex gap-3">
							<div>{formatNumber(content.vote_count)} Reviews</div>
							<div>{new Date(content.release_date).getFullYear()}</div>
							<div>{toHoursAndMinutes(content.runtime)}</div>
						</div>
					</div>
					<div class="leading-6 pr-4 font-light text-gray-3 line-clamp-4 lt-md:line-clamp-3">
						{content.overview}
					</div>
				</div>
			</div>
		</a>
	</div>
</div>

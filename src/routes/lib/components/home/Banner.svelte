<script lang="ts">
	import { getFirstMoviePopular } from '../../apis/movie';
	import { FormatNumber, toHoursAndMinutes } from '../../helpers/format';
	import type { TypeBannerMovie } from '../../types/movie';
	import StarRating from '../StarRating.svelte';
	import LoadingBanner from './LoadingBanner.svelte';

	export let idMovie: number;

	export let content: TypeBannerMovie[] | any = [];
	let isLoading: boolean = true;

	$: movie = getFirstMoviePopular(idMovie);
	setTimeout(() => {
		isLoading = false;
		content = $movie?.data;
	}, 1000);
</script>

<div class="w-full bg-gray-8">
	{#if isLoading}
		<div class="flex justify-center items-center">
			<LoadingBanner />
		</div>
	{:else}
		{#each content as item}
			<div class="relative bg-[#111111] h-400px">
				<div
					class="absolute top-0 right-0 lt-lg:left-0 lt-lg:top-0 lg:bottom-0 lg:left-1/3 bg-gray-9"
				>
					<img
						src={`${import.meta.env.VITE_PUBLIC_IMAGE_URL}/w780/${item.backdrop_path}`}
						alt="img-banner"
						width="400"
						height="250"
						class="w-full object-cover bg-gray-9 lg:h-full lt-lg:object-top"
					/>
				</div>
				<div
					class="absolute bottom-0 top-0 left-0 px-10 flex-col justify-center from-black
				via-black to-transparent lt-md:px-6 lt-md:py-4 lt-lg:bg-gradient-to-t lt-lg:right-0 lt-lg:p-10 lg:w-3/4 lg:bg-gradient-to-r"
				>
					<div class="h-full flex justify-center flex-col lt-lg:justify-end lg:w-3/4">
						<div class="text-5xl font-semibold lt-md:text-4xl">{item.title}</div>
						<div class="flex gap-3 mt-4 mb-3 lt-md:flex-col">
							<div class="flex gap-2">
								<StarRating rating={item.vote_average} class="w-25" />
								<div class="text-gray-5">{item.vote_average}</div>
							</div>
							<div class="text-gray-5 flex gap-3">
								<div>{FormatNumber(item.vote_count)} Reviews</div>
								<div>{new Date(item.release_date).getFullYear()}</div>
								<div>{toHoursAndMinutes(item.runtime)}</div>
							</div>
						</div>
						<div class="leading-6 pr-4 text-gray-3 lt-md:line-clamp-3">
							{item.overview}
						</div>
					</div>
				</div>
			</div>
		{/each}
	{/if}
</div>

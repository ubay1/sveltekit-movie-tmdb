<script lang="ts">
	import { getDetailMovie } from '../../apis/movie';
	import { formatNumber, toHoursAndMinutes } from '../../helpers/format';
	import type { IDetailMovie } from '../../types/movie';
	import ImageLoader from '../image/ImageLoader.svelte';
	import StarRating from '../StarRating.svelte';

	// export let id: number;
	export let content: IDetailMovie;
	// console.log(content);

	// let isLoading: boolean = true;

	let activeTab: number = 1;
	const listTabDetail = [
		{ tab: 1, label: 'OVERVIEW' },
		{ tab: 2, label: 'VIDEOS' },
		{ tab: 3, label: 'PHOTOS' }
	];

	// $: movie = getDetailMovie(id);
	// setTimeout(() => {
	// 	isLoading = false;
	// 	content = $movie?.data;
	// 	console.log(content);
	// }, 1000);
</script>

<div class="w-full bg-gray-8">
	<div class="relative bg-[#111111] h-400px">
		<div class="absolute top-0 right-0 lt-lg:left-0 lt-lg:top-0 lg:bottom-0 lg:left-1/3 bg-gray-9">
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
				<div class="text-5xl font-semibold lt-md:text-4xl">
					{content.title}
				</div>
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

				<button
					class="cursor-pointer btn text-primary border-primary border-1 w-1/2 mt-8 lt-lg:hidden p-4 flex items-center justify-center gap-2 hover:bg-primary hover:text-white"
				>
					<div class="i-ph-play" />
					<div>Watch Trailer</div>
				</button>
			</div>
		</div>
	</div>
	<!-- {#if isLoading}
		<div class="gap-4 overflow-x-auto">
			<div class="h-400px flex justify-center items-center relative">
				<div class="shimmer-image" />
			</div>
		</div>
	{:else} -->
	<!-- {#each content as item} -->
	<!-- {/each} -->
	<!-- {/if} -->
</div>

<div class="flex justify-center gap-10 mt-10 lt-lg:mt-0 lt-lg:grid lt-lg:grid-cols-3 lt-lg:gap-0">
	{#each listTabDetail as tab}
		<button
			on:click={() => (activeTab = tab.tab)}
			class="btn text-xl px-0 py-1 font-bold cursor-pointer lt-lg:p-4 lt-lg:text-sm lt-lg:font-light 
			{activeTab === tab.tab
				? 'border-b border-white font-semibold lt-lg:bg-gray-8 lt-lg:border-none'
				: 'text-gray-7 font-light lt-lg:bg-gray-9'}
			"
		>
			{tab.label}
		</button>
	{/each}
</div>

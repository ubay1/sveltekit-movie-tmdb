<script lang="ts">
	import { getDetailMovie } from '../../apis/movie';
	import { FormatNumber, toHoursAndMinutes } from '../../helpers/format';
	import type { TypeDetailMovie } from '../../types/movie';
	import StarRating from '../StarRating.svelte';
	import Overview from './Overview.svelte';

	export let id: number;

	export let content: TypeDetailMovie[] | any = [];
	let isLoading: boolean = true;
	let activeTab: number = 1;

	const listTabDetail = [
		{ tab: 1, label: 'OVERVIEW' },
		{ tab: 2, label: 'VIDEOS' },
		{ tab: 3, label: 'PHOTOS' }
	];

	$: movie = getDetailMovie(id);
	setTimeout(() => {
		isLoading = false;
		content = $movie?.data;
	}, 1000);
</script>

<div class="w-full bg-gray-8">
	{#if isLoading}
		<div class="gap-4 overflow-x-auto">
			<div class="h-400px flex justify-center items-center relative">
				<div class="shimmer-image" />
			</div>
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
								<div class="text-gray-5">{item.vote_average.toFixed(1)}</div>
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

						<button
							class="cursor-pointer btn text-primary border-primary border-1 w-1/2 mt-8 lt-lg:hidden p-4 flex items-center justify-center gap-2 hover:bg-primary hover:text-white"
						>
							<div class="i-ph-play" />
							<div>Watch Trailer</div>
						</button>
					</div>
				</div>
			</div>
		{/each}
	{/if}
</div>

<div class="flex justify-center gap-10 mt-10">
	{#each listTabDetail as tab}
		<button
			class="btn text-xl px-0 py-1 font-bold {activeTab === tab.tab
				? 'border-b border-white'
				: 'text-gray-7'}">{tab.label}</button
		>
	{/each}
</div>
<Overview />

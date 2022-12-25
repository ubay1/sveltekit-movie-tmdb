<script lang="ts">
	import type { IListMovie } from '../../types/movie';
	import ImageLoader from '../image/ImageLoader.svelte';
	import StarRating from '../StarRating.svelte';
	import { getListMoviePopular } from '../../apis/movie';
	import { onMount } from 'svelte';
	import LoadingListMovie from './LoadingListMovie.svelte';
	import BannerHome from './BannerHome.svelte';
	import LoadingBanner from './LoadingBanner.svelte';

	export let title: string;
	export let content: IListMovie[] | any = [];
	// let idFirstMovie: number = 0;
	// let isLoading: boolean = true;

	// $: compIdFirstMovie = idFirstMovie;
	// $: movie = getListMoviePopular();
	// setTimeout(() => {
	// 	isLoading = false;
	// 	content = $movie?.data;

	// 	idFirstMovie = Number($movie?.data[0].id);
	// }, 1000);
	// onMount(() => {});
</script>

<!-- {#if compIdFirstMovie !== 0}
	<BannerHome idMovie={compIdFirstMovie} />
{:else}
	<div class="w-full bg-gray-8">
		<div class="flex justify-center items-center">
			<LoadingBanner />
		</div>
	</div>
{/if} -->

<div class="px-10 mt-6 mb-10 lt-md:px-6">
	<div class="text-white text-2xl mb-4">{title}</div>
	<div class="flex gap-4 overflow-x-auto pb-6">
		<!-- {#if isLoading}
			<LoadingListMovie />
		{:else} -->
		{#each content as item}
			<div data-sveltekit-preload-code class="flex flex-col">
				<a href="/movies/{item.id}" class="text-white decoration-none">
					<div class=" w-230px h-370px bg-gray-8 p-1 rounded-md lt-md:w-200px lt-md:h-300px">
						<ImageLoader
							src={`${import.meta.env.VITE_PUBLIC_IMAGE_URL}w300/${item.poster_path}`}
							alt="poster-{item.id}"
							classes="object-cover rounded-md"
						/>
					</div>
					<div class="mt-2">
						<div class="text-base font-light line-clamp-1">{item.title}</div>
						<div class="flex items-center gap-2">
							<StarRating rating={item.vote_average} class="w-20" />
							<div class="text-gray-4 font-light text-sm">{item.vote_average}</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
		<!-- {/if} -->
	</div>
</div>

<style></style>

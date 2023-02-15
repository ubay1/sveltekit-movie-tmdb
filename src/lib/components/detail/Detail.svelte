<script lang="ts">
	import { formatNumber, toHoursAndMinutes } from '../../helpers/format';
	import type { IDetailMovie } from '../../types/movie';
	import ImageLoader from '../image/ImageLoader.svelte';
	import CustomModal from '../modal/CustomModal.svelte';
	import StarRating from '../StarRating.svelte';

	export let content: IDetailMovie;
	let showModal: boolean = false;
	let keyEmbedYoutube: string = '';
	let keyEmbedVimeo: string = '';

	function closeModal(event: any) {
		showModal = false;
		keyEmbedVimeo = '';
		keyEmbedYoutube = '';
	}

	function showTrailer() {
		showModal = true;
		keyEmbedYoutube =
			content.videos.results[0].site.toLowerCase() === 'youtube'
				? content.videos.results[0].key
				: '';
		keyEmbedVimeo =
			content.videos.results[0].site.toLowerCase() === 'vimeo' ? content.videos.results[0].key : '';
	}
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
					class="cursor-pointer btn text-primary border-primary border-1 w-1/2 mt-8  p-4 flex items-center justify-center gap-2 hover:bg-primary hover:text-white lt-lg:mt-4 lt-lg:w-full"
					on:click={showTrailer}
				>
					<div class="i-ph-play" />
					<div>Watch Trailer</div>
				</button>
			</div>
		</div>
	</div>
</div>

{#if showModal}
	<CustomModal on:close={closeModal}>
		{#if keyEmbedYoutube !== ''}
			<iframe
				title="iframe video from youtube"
				height="400"
				class="w-full h-full"
				src={import.meta.env.VITE_SECRET_VIDEO_YOUTUBE + keyEmbedYoutube}
			/>
		{:else if keyEmbedVimeo !== ''}
			<iframe
				title="iframe video from vimeo"
				class="w-full h-full"
				src={import.meta.env.VITE_SECRET_VIDEO_VIMEO + keyEmbedVimeo}
			/>
		{/if}
	</CustomModal>
{/if}

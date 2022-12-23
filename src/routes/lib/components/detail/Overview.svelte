<script lang="ts">
	import { formatDate, formatNumber, toHoursAndMinutes } from 'lib/helpers/format';
	import type { TypeDetailMovie } from 'lib/types/movie';
	import ImageLoader from '../image/ImageLoader.svelte';

	export let isLoading: boolean = false;
	export let content: TypeDetailMovie[] = [];

	function filterCrew(value: any[]) {
		return value[0].name;
	}
	function filterName(value: any) {
		const newName = value.map((item: { name: string }) => item.name);
		return newName.toString().split(',').join(', ');
	}
</script>

<div class="mt-10 mb-4">
	{#if !isLoading}
		{#each content as item}
			<div class="mt-14 px-10">
				<div class="flex justify-center items-start gap-8">
					<div class="w-200px h-300px bg-gray-8 lt-lg:hidden">
						<img
							src={`${import.meta.env.VITE_PUBLIC_IMAGE_URL}/w780/${item.poster_path}`}
							alt="img-poster"
							width="200"
							height="300"
							class="object-cover bg-gray-8 lg:h-full lt-lg:object-top"
						/>
					</div>
					<div class="flex flex-col gap-2 font-light">
						<div class="text-xl font-semibold">Storyline</div>
						<div class="leading-6">{item.overview}</div>
						<div class="grid grid-cols-2 gap-x-12 gap-y-2 mt-4 lt-lg:flex lt-lg-flex-col">
							<div class="grid grid-cols-[30%_70%] lt-lg:grid-cols-[100px_auto]">
								<div class="lt-lg:max-w-90px">Released</div>
								<div>{formatDate(new Date(item.release_date))}</div>
							</div>
							<div class="grid grid-cols-[30%_70%] lt-lg:grid-cols-[100px_auto]">
								<div class="lt-lg:max-w-90px">Runtime</div>
								<div>{toHoursAndMinutes(item.runtime)}</div>
							</div>
							<div class="grid grid-cols-[30%_70%] lt-lg:grid-cols-[100px_auto]">
								<div class="lt-lg:max-w-90px">Director</div>
								<div>{filterCrew(item.credits.crew.filter(({ job }) => job === 'Director'))}</div>
							</div>
							<div class="grid grid-cols-[30%_70%] lt-lg:grid-cols-[100px_auto]">
								<div class="lt-lg:max-w-90px">Budget</div>
								<div>$ {formatNumber(item.budget)}</div>
							</div>
							<div class="grid grid-cols-[30%_70%] lt-lg:grid-cols-[100px_auto]">
								<div class="lt-lg:max-w-90px">Revenue</div>
								<div>$ {formatNumber(item.revenue)}</div>
							</div>
							<div class="grid grid-cols-[30%_70%] lt-lg:grid-cols-[100px_auto]">
								<div class="lt-lg:max-w-90px">Genre</div>
								<div>{filterName(item.genres)}</div>
							</div>
							<div class="grid grid-cols-[30%_70%] lt-lg:grid-cols-[100px_auto]">
								<div class="lt-lg:max-w-90px">Status</div>
								<div>{item.status}</div>
							</div>
							<div class="grid grid-cols-[30%_70%] lt-lg:grid-cols-[100px_auto]">
								<div class="lt-lg:max-w-90px">Language</div>
								<div>{filterName(item.spoken_languages)}</div>
							</div>
							<div class="grid grid-cols-[30%_70%] lt-lg:grid-cols-[100px_auto]">
								<div class="lt-lg:max-w-90px">Production</div>
								<div>{filterName(item.production_companies)}</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-14 mb-4 text-xl font-semibold">Cast</div>
				<div class="flex gap-2 overflow-x-auto overflow-y-hidden pb-10">
					{#each item.credits.cast as cast}
						<div class="flex flex-col">
							<div class=" w-230px h-300px bg-gray-8 lt-md:w-200px lt-md:h-300px">
								{#if cast.profile_path}
									<ImageLoader
										src={`${import.meta.env.VITE_PUBLIC_IMAGE_URL}w300/${cast.profile_path}`}
										alt="poster-{item.id}"
										classes="object-cover"
									/>
								{:else}
									<div class="flex justify-center items-center h-full">Not Found</div>
								{/if}
							</div>
							<div class="font-light">{cast.name}</div>
							<div class="text-sm text-gray-5">{cast.character}</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>

<style></style>

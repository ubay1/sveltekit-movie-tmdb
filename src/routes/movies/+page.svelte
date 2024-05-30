<script lang="ts">
	import BannerHome from '$lib/components/home/BannerHome.svelte';
	import ListMovie from '$lib/components/home/ListMovie.svelte';
	import type { IDetailMovie, IListMovie } from '$lib/types/movie';
	import { createQuery } from '@tanstack/svelte-query';
	import type { PageData } from './$types';

	export let data: PageData;

	const query = createQuery({
		queryKey: ['list-movie'],
		// queryFn: getPosts,
		initialData: data
	});
</script>

<div class="lt-lg:mb-20">
	<BannerHome content={data.banner} type="movies" fromPage="popular" />
	<ListMovie title="Popular Movies" content={data.list_movie_popular} fromPage="popular" />
	<ListMovie title="Top Rated Movies" content={data.list_movie_top_rated} fromPage="toprated" />
	<ListMovie title="Upcoming Movies" content={data.list_movie_upcoming} fromPage="upcoming" />
	<ListMovie
		title="Now Playing Movies"
		content={data.list_movie_now_playing}
		fromPage="nowplaying"
	/>
</div>

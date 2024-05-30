<script lang="ts">
	import BannerHome from '$lib/components/home/BannerHome.svelte';
	import ListMovie from '$lib/components/home/ListMovie.svelte';
	import type { IDetailMovie, IListMovie, IListTv } from '$lib/types/movie';
	import ListTv from '$lib/components/home/ListTv.svelte';
	import type { PageData } from './$types';
	import { createQuery } from '@tanstack/svelte-query';

	export let data: PageData;

	const query = createQuery({
		queryKey: ['posts'],
		// queryFn: getPosts,
		initialData: data
	});

	// export let data: {
	// 	banner: IDetailMovie;
	// 	list_movie_popular: IListMovie[];
	// 	list_tv_popular: IListTv[];
	// };
</script>

<!-- fetching CSR -->
<!-- <Suspense>
	<PopularMovies />
	<ListTv />
</Suspense> -->

<!-- fetching SSR -->
<BannerHome content={data.banner} fromPage="home" />
<ListMovie title="Popular Movies" content={data.list_movie_popular} fromPage="home" />
<ListTv title="Popular TV" content={data.list_tv_popular} fromPage="home" />

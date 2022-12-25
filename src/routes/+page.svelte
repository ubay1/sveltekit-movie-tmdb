<script lang="ts">
	import { Suspense } from '@svelte-drama/suspense';
	import BannerHome from 'lib/components/home/BannerHome.svelte';
	import ListMovie from 'lib/components/home/ListMovie.svelte';
	import type { IDetailMovie, IListMovie, IListTv } from 'lib/types/movie';
	import ListTv from './lib/components/home/ListTv.svelte';

	export let data: {
		banner: IDetailMovie;
		list_movie_popular: IListMovie[];
		list_tv_popular: IListTv[];
	};
</script>

<!-- fetching CSR -->
<!-- <Suspense>
	<PopularMovies />
	<ListTv />
</Suspense> -->

<!-- fetching SSR -->
<BannerHome content={data.banner} />
<ListMovie title="Popular Movies" content={data.list_movie_popular} />
<ListTv title="Popular TV" content={data.list_tv_popular} />

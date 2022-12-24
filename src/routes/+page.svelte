<script lang="ts">
	import { Suspense } from '@svelte-drama/suspense';
	import BannerHome from 'lib/components/home/BannerHome.svelte';
	import type { IDetailMovie, IListMovie, IListTv } from 'lib/types/movie';
	import PopularMovies from './lib/components/home/PopularMovies.svelte';
	import PopularTv from './lib/components/home/PopularTv.svelte';

	export let data: {
		banner: IDetailMovie;
		list_movie_popular: IListMovie[];
		list_tv_popular: IListTv[];
	};
</script>

<!-- fetching CSR -->
<!-- <Suspense>
	<PopularMovies />
	<PopularTv />
</Suspense> -->

<!-- fetching SSR -->
<BannerHome content={data.banner} />
<PopularMovies content={data.list_movie_popular} />
<PopularTv content={data.list_tv_popular} />

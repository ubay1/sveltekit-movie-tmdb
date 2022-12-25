<script lang="ts">
	import BannerHome from 'lib/components/home/BannerHome.svelte';
	import ListTv from 'lib/components/home/ListTv.svelte';
	import type { IDetailMovie, IListMovie } from 'lib/types/movie';

	export let data: {
		banner: IDetailMovie;
		list_tv_popular: IListMovie[];
		list_tv_top_rated: IListMovie[];
	};
</script>

<div class="lt-lg:mb-20">
	<BannerHome content={data.banner} />
	<ListTv title="Popular TV" content={data.list_tv_popular} />
	<ListTv title="Top Rated TV" content={data.list_tv_top_rated} />
</div>

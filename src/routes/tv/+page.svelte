<script lang="ts">
	import BannerHome from '$lib/components/home/BannerHome.svelte';
	import ListTv from '$lib/components/home/ListTv.svelte';
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
	<BannerHome content={data.banner} type="tv" fromPage="popular" />
	<ListTv title="Popular TV" content={data.list_tv_popular} fromPage="popular" />
	<ListTv title="Top Rated TV" content={data.list_tv_top_rated} fromPage="toprated" />
</div>

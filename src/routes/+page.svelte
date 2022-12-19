<script lang="ts">
	import Banner from 'lib/components/Banner.svelte';
	import PopularMovies from 'lib/components/home/PopularMovies.svelte';
	import PopularTv from 'lib/components/home/PopularTv.svelte';
	import type { TypeContentFromMovie } from 'lib/types/movie';

	export let data: TypeContentFromMovie;
</script>

<Banner content={data.first_movie_popular?.data} />

<div class="px-10 mt-6 mb-10">
	<div class="text-white text-2xl mb-4">Popular Movies</div>
	<PopularMovies content={data.list_movie_popular?.data} />
	<div class="text-white text-2xl mt-14 mb-4">Popular TV</div>
	<PopularTv content={data.list_tv_popular?.data} />
</div>

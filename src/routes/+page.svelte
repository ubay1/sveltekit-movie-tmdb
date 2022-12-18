<script lang="ts">
	import Banner from 'lib/components/Banner.svelte';
	import type { TypeContentFromMovie } from 'lib/types/movie';

	export let data: TypeContentFromMovie;

	console.log(data.first_movie_popular?.data);
</script>

<Banner content={data.first_movie_popular?.data} />
<div class="bg-amber">hi svelter</div>

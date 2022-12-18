<script lang="ts">
	import Banner from 'lib/components/Banner.svelte';
	import type { TypeContentFromMovie } from 'lib/types/movie';

	export let data: TypeContentFromMovie;
</script>

<Banner content={data.first_movie_popular?.data} />
<div class="bg-amber">hi svelter</div>

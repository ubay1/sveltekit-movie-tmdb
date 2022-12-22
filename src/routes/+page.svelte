<script lang="ts">
	import { Suspense } from '@svelte-drama/suspense';
	import PopularMovies from './lib/components/home/PopularMovies.svelte';
	import PopularTv from './lib/components/home/PopularTv.svelte';
</script>

<Suspense>
	<PopularMovies />
	<PopularTv />
</Suspense>

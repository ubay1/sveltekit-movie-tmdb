<script lang="ts">
	import Detail from 'lib/components/detail/Detail.svelte';
	import Overview from 'lib/components/detail/Overview.svelte';
	import type { IDetailMovie } from 'lib/types/movie';

	export let data: IDetailMovie;
</script>

<!-- CSR -->
<!-- <Suspense>
	<Detail id={Number($page.params.id)} />
</Suspense> -->

<div class="lt-lg:mb-20">
	<Detail content={data} />
	<Overview content={data} />
</div>

<style></style>

<script lang="ts">
	import { page } from '$app/stores';
	import { Suspense } from '@svelte-drama/suspense';
	import Detail from 'lib/components/detail/Detail.svelte';
	import Overview from 'lib/components/detail/Overview.svelte';
	import type { IDetailMovie } from 'lib/types/movie';

	export let data: IDetailMovie;
</script>

<!-- CSR -->
<!-- <Suspense>
	<Detail id={Number($page.params.id)} />
</Suspense> -->

<Detail content={data} />
<Overview content={data} />

<style></style>

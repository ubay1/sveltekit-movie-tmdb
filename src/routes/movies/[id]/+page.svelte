<script>
	import { page } from '$app/stores';
	import { Suspense } from '@svelte-drama/suspense';
	import Detail from 'lib/components/detail/Detail.svelte';
</script>

<Suspense>
	<Detail id={Number($page.params.id)} />
</Suspense>

<style></style>

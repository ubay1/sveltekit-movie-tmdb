<script>
	import { page } from '$app/stores';
	import { Suspense } from '@svelte-drama/suspense';
	import BannerDetail from 'lib/components/detail/BannerDetail.svelte';
</script>

<Suspense>
	<BannerDetail id={Number($page.params.id)} />
</Suspense>

<style></style>

<script lang="ts">
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { navigating } from '$app/stores';
	import 'uno.css';
	import '$lib/assets/css/global.css';
	import Seo from '$lib/components/Seo.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<Seo />
<main class="lg:grid lg:grid-cols-[6%_94%] h-full">
	<Sidebar />
	<div class="lg:grid-area-[1/2]">
		<QueryClientProvider client={queryClient}>
			<slot />
		</QueryClientProvider>
	</div>
</main>

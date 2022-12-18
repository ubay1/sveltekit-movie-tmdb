<script lang="ts">
	import 'uno.css';
	import 'lib/assets/css/global.css';
	import Seo from 'lib/components/Seo.svelte';
	import Sidebar from 'lib/components/Sidebar.svelte';
</script>

<Seo />
<main class="grid grid-cols-[6%_94%] h-full">
	<Sidebar />
	<div class="grid-area-[1/2]">
		<slot />
	</div>
</main>

<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	const fav = '/favicon.ico';
	export let metadescription = 'Sveltekit Movies';
	export let title = 'Sveltekit Movies';
	export let image = {
		url: '/icon.webp',
		alt: 'sveltekit movies'
	};
	export let url = $page.url.href;
	export let favicon = fav;
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="icon" href={favicon} />
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={metadescription} />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:image" content={image.url} />
	<meta name="twitter:image:alt" content={image.alt} />
	<meta property="og:title" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={metadescription} />
	<meta property="og:image" content={image.url} />
</svelte:head>

<script lang="ts">
	import { page } from '$app/stores';

	// console.log($page.url.pathname);

	type ITypeSidebar = {
		link: string;
		iconActive: string;
		icon: string;
	};

	let listMenu: ITypeSidebar[] = [
		{
			link: '/',
			iconActive: 'i-ph-house-fill',
			icon: 'i-ph-house-light'
		},
		{
			link: '/movies',
			iconActive: 'i-ph-film-strip-fill',
			icon: 'i-ph-film-strip-light'
		},
		{
			link: '/tv',
			iconActive: 'i-ph-television-simple-fill',
			icon: 'i-ph-television-simple-light'
		},
		{
			link: '/search',
			iconActive: 'i-ph-magnifying-glass-fill',
			icon: 'i-ph-magnifying-glass-light'
		}
	];
</script>

<div class="sidebar fixed w-[6%] top-0 left-0 h-full flex flex-col justify-center items-center">
	{#each listMenu as menu, index}
		<a href={menu.link} class="decoration-none text-white p-3">
			<p
				class="icon-menu text-3xl {menu.link === $page.url.pathname
					? `${menu.iconActive} icon-menu-active`
					: menu.icon}"
			/>
		</a>
	{/each}
</div>

<script lang="ts">
	import { page } from '$app/stores';

	// console.log($page.url.pathname);

	type ITypeSidebar = {
		link: string;
		iconActive: string;
		icon: string;
		label: string;
	};

	let listMenu: ITypeSidebar[] = [
		{
			link: '/',
			iconActive: 'i-ph-house-fill',
			icon: 'i-ph-house-light',
			label: 'Home'
		},
		{
			link: '/movies',
			iconActive: 'i-ph-film-strip-fill',
			icon: 'i-ph-film-strip-light',
			label: 'Movies'
		},
		{
			link: '/tv',
			iconActive: 'i-ph-television-simple-fill',
			icon: 'i-ph-television-simple-light',
			label: 'TV'
		},
		{
			link: '/search',
			iconActive: 'i-ph-magnifying-glass-fill',
			icon: 'i-ph-magnifying-glass-light',
			label: 'Search'
		}
	];
</script>

<div
	class="bg-black border-gray-7 fixed w-[6%] z-10 left-0 h-full flex flex-col items-center lg:border-r lg:justify-center lg:top-0 lt-lg:w-full lt-lg:bottom-0 lt-lg:h-15 lt-lg:flex-row lt-lg:justify-around lt-lg:border-t"
>
	{#each listMenu as menu}
		<a href={menu.link} class="flex flex-col items-center decoration-none text-white p-3">
			<div
				class="text-white text-3xl {menu.link === $page.url.pathname
					? `${menu.iconActive} text-primary`
					: menu.icon}"
			/>
			<div class="text-xs {menu.link === $page.url.pathname ? `text-primary` : 'text-gray-3'}">
				{menu.label}
			</div>
		</a>
	{/each}
</div>

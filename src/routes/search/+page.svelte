<script lang="ts">
	// import { enhance, type SubmitFunction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import ListMovieTv from 'lib/components/search/ListMovieTv.svelte';
	import type { IListMovie, IListTv } from 'lib/types/movie';
	import { browser } from '$app/environment';
	import type { ActionData, PageData } from './$types';
	export let form: ActionData;
	// export let data: PageData;
	console.log(form);
	let isLoading: boolean = false;
	let curr_page: number = 1;
	let search: string = '';
	let listData: IListMovie[] & IListTv[] = form?.data ?? [];
	let totalPages: number = form?.total_pages ?? 0;

	// const submitSearchMovieTv: SubmitFunction = ({ form, data, action, cancel }) => {
	// 	const { search } = Object.fromEntries(data);
	// 	isLoading = true;

	// 	if (search.length < 1) {
	// 		alert('form cannot be blank!');
	// 		isLoading = false;
	// 		cancel();
	// 	}

	// 	return async ({ result, update }) => {
	// 		isLoading = false;
	// 		switch (result.type) {
	// 			case 'success':
	// 				// totalPages = result?.data;
	// 				listData = [];
	// 				listData.push(...(result?.data?.data ?? []));

	// 				form.reset();
	// 				await invalidateAll();
	// 				break;
	// 			case 'failure':
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 		await update();
	// 	};
	// };
</script>

<form action="?/search" method="POST" class="flex justify-center items-center w-full">
	<!-- use:enhance={submitSearchMovieTv} -->
	<input type="hidden" name="curr_page" value={curr_page} />
	<input
		type="text"
		name="search"
		id="search"
		bind:value={search}
		placeholder="Search movie or tv"
		disabled={isLoading}
		autocomplete="off"
		class="w-full m-4 p-3 px-4 bg-black text-white text-base border-1 border-gray-7 rounded focus:outline-none focus:bg-gray-8 disabled:opacity-50"
	/>
</form>

{#if isLoading}
	<div class="flex flex-col justify-center items-center">
		<div class="loading" />
		<div class="text-sm mt-2">Loading movie & tv ..</div>
	</div>
{:else if listData.length === 0}
	<div class="flex flex-col justify-center items-center">
		<div class="i-ph-film-strip w-10 h-10 mb-2" />
		Movie/TV Not Found
	</div>
{:else}
	<div class="mb-30">
		<ListMovieTv content={listData} />
		<!-- <form
			action="?/search"
			method="POST"
			use:enhance={submitSearchMovieTv}
			class="flex justify-center items-center w-full {curr_page + 1 === totalPages ? 'hidden' : ''}"
		>
			<input type="hidden" name="curr_page" value={curr_page} />
			<input type="hidden" name="search" value={search} />
			<button
				class="bg-transparent w-1/2 border-1 border-primary text-white rounded-md p-4 text-base hover:bg-primary cursor-pointer"
				on:click={() => (curr_page = curr_page + 1)}
			>
				Load more
			</button>
		</form> -->
	</div>
{/if}

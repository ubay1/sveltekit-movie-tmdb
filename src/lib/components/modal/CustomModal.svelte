<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}
</script>

<div class="overlay_modal">
	<button
		class="absolute top-4 right-10 cursor-pointer border-none flex justify-center items-center bg-red-5 w-7 h-7 p-1 rounded-full"
		on:click={closeModal}
	>
		<div class="i-ph-x-bold text-white" />
	</button>
	<div class="wrapper_modal">
		<slot />
	</div>
</div>

<style scoped>
	.overlay_modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 3003;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.wrapper_modal {
		width: 80%;
		height: 80%;
		box-shadow: 1px 2px 4px rgba(153, 155, 168, 0.12);
		border-radius: 4px;
		background-color: #fff;
		/* padding: 10px; */
	}
</style>

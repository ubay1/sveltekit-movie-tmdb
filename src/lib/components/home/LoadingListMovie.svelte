<script lang="ts">
</script>

<div class="flex gap-4 overflow-x-auto pb-6">
	{#each Array(20) as _}
		<div class="flex flex-col">
			<div
				class="w-230px h-370px bg-gray-8 p-1 rounded-md flex justify-center items-center lt-md:w-200px lt-md:h-300px"
			>
				<img
					width="100"
					height="100"
					src="/icon.webp"
					alt="poster-loading"
					class="object-cover rounded-md aspect-1/1"
				/>
			</div>
		</div>
	{/each}
</div>

<style></style>

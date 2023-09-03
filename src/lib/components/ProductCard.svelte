<script lang="ts">
	export let discount: number = 0;
	export let price: number;
</script>

<div
	class="flex h-fit flex-col gap-[1rem]
    rounded-[.75rem] border border-c-1-d bg-c-1-j p-[1rem]"
>
	<!-- img -->
	<div class="relative h-[11.25rem] self-stretch">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="237"
			height="180"
			viewBox="0 0 237 180"
			fill="none"
		>
			<rect width="237" height="180" rx="12" fill="#F9F9F9" />
		</svg>
		{#if discount}
			<p
				class="absolute left-[.75rem] top-[.75rem] inline-flex items-center
        gap-[.625rem] px-[.5rem]"
			>
				<span class="s6 text-c-2-a">- {discount} %</span>
			</p>
		{/if}
	</div>
	<!-- details -->
	<div class="flex flex-col">
		<div class="">
			<p class="s5 text-c-1-a">Product Title</p>
			<p class="caption mt-[.25rem] text-c-1-b">Space for a small product description</p>
		</div>
		<div
			class="mt-[1rem] flex
        items-center justify-between"
		>
			<div class="">
				<p class="s4 text-c-1-a">
					{parseFloat((price * 0.01 - discount * 0.01 * price * 0.01).toFixed(2))} USD
				</p>
				{#if discount}
					<p class="s6 text-c-1-c line-through">{parseFloat((price * 0.01).toFixed(2))}</p>
				{/if}
			</div>
			<button class="">
				<span class="button text-c-1-j">Buy now</span>
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	button {
		display: flex;
		height: 2.25rem;
		padding: 0.75rem;
		align-items: center;
		gap: 0.375rem;
		border-radius: 0.75rem;
		border: 2px solid var(--c-2-b, #46760a);
		background: var(--c-2-a, #6a983c);
	}
</style>

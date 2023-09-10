<script lang="ts">
	import { page } from "$app/stores";
	import Rating from "./rating/Rating.svelte";

	export let discount: number = 0;
	export let price: number;
	export let rating: number|null|undefined=undefined;
	
</script>

<div
	class="flex h-fit flex-col gap-[1rem]
    rounded-[.75rem] border border-c-1-d bg-c-1-j p-[.9375rem]"
>
	<!-- img -->
	<div class="relative h-[11.25rem] self-stretch">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="236"
			height="180"
			viewBox="0 0 236 180"
			fill="none"
		>
			<rect width="236" height="180" rx="12" fill="#F9F9F9" />
		</svg>
		{#if discount}
			<p
				class="absolute left-[.75rem] top-[.75rem] inline-flex items-center
        gap-[.625rem] px-[.5rem]"
			>
				<span class="s6 text-c-2-b">- {discount} %</span>
			</p>
		{/if}
	</div>
	<!-- details -->
	<div class="flex flex-col">
		<div class="">
			<p class="s5 text-c-1-a"><a href="/categories/{$page.params.category}/{"Carrots from Tomissy Farm"}">Product Title</a></p>
			<p class="caption mt-[.25rem] text-c-1-b">Space for a small product description</p>
		</div>
		{#if rating}
			<Rating fill="#151515" stroke="#EBEBEB" {rating}/>
		{/if}
		<!-- price and add to cart button -->
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
			<button class="btn-filled">
				<span class="button text-c-1-j">Buy now</span>
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	button {
		height: 2.25rem;
		padding: 0.75rem;
	}
</style>

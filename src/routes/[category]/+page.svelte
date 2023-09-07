<script lang="ts">
	import { page } from '$app/stores';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import CategoriesCounting from './CategoriesCounting.svelte';
	import CheckBrand from './CheckBrand.svelte';
	import CheckRating from './CheckRating.svelte';
	import HeaderFiltres from './HeaderFiltres.svelte';
	import PriceFiltre from './PriceFiltre.svelte';
	import ProductRow from './ProductRow.svelte';

	let view: "grid" | "list" = "grid";
</script>

<div class="flex bg-c-1-j px-[2.8125rem] py-[1rem]">
	<p class="caption text-c-1-c"><a href="/">Homepage</a></p>
	<span class="caption mx-[.5rem] text-c-1-d">/</span>
	<p class="caption text-c-1-a">{$page.params.category}</p>
</div>
<!-- HEADING -->
<input class="" type="radio" name="layout-display" id="select-grid-view" hidden value="grid" bind:group={view} checked />
<input class="" type="radio" name="layout-display" id="select-list-view" hidden value="list" bind:group={view} />

<div class="flex items-center justify-between bg-c-1-j px-[2.8125rem] py-[.5rem]">
	<h1 class="s1 text-c-1-a">{$page.params.category}</h1>
	<div class="flex gap-[1.5rem] [&_label]:cursor-pointer">
		<label class="flex gap-[0.25rem]" for="select-grid-view">
			<div
				class="flex h-[1rem] w-[1rem] items-center justify-center stroke-c-1-c"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<path
						d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path d="M1.33301 8H14.6663" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M8 1.33331V14.6666" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
			<p class="caption text-c-1-a">Grid view</p>
		</label>
		<label class="flex gap-[0.25rem]" for="select-list-view">
			<div
				class="flex h-[1rem] w-[1rem] items-center justify-center stroke-c-1-c"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<path
						d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path d="M1.33301 4.66663H14.6663" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M1.33301 8H14.6663" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M1.33301 11.3333H14.6663" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
			<p class="caption text-c-1-c">List view</p>
		</label>
		<div class="flex gap-[0.25rem]">
			<div class="flex h-full items-center justify-center rounded-[.75rem] bg-c-2-e px-[.5rem]">
				<!-- dynamic -->
				<p class="s6 px-[1px] text-c-2-a">117</p>
			</div>
			<p class="caption text-c-1-c">Products</p>
		</div>
	</div>
</div>
<!-- filtres -->
<HeaderFiltres />
<main
	class="mx-auto grid max-w-[78.75rem] grid-cols-[min-content,auto]
	gap-[2rem] px-[2.8125rem] py-[4rem]"
>
	<!-- more filtres -->
	<div class="flex w-[16.82688rem] flex-col gap-[3rem]">
		<!-- categories counting -->
		<CategoriesCounting
			categories={[
				{ name: 'Category name', count: 320 },
				{ name: 'Category name', count: 112 },
				{ name: 'Category name', count: 32 },
				{ name: 'Category name', count: 48 }
			]}
		/>
		<!-- check brand filtre -->
		<CheckBrand
			brands={[
				{ name: 'Filtre by brand item', checked: false },
				{ name: 'Filtre by brand item', checked: true },
				{ name: 'Filtre by brand item', checked: true },
				{ name: 'Filtre by brand item', checked: false },
				{ name: 'Filtre by brand item', checked: false }
			]}
		/>
		<!-- check rating filtre -->
		<CheckRating />
		<!-- Price filtre -->
		<PriceFiltre />
	</div>

	<!-- feed -->
	{#if view === "list"}
	<div class="flex flex-col gap-[2rem]">
		{#each Array(5).fill('') as product}
			<ProductRow />
		{/each}
	</div>
	{:else}
		<div class="grid-view">
			{#each Array(9).fill({price: 4856, discount: 36}) as product}
				<ProductCard {...product}/>
			{/each}
		</div>
	{/if}


</main>
<div class="flex w-full items-center justify-between px-[2.8125rem] py-[1rem]">
	<div class="flex gap-[.5rem]">
		<span class="caption text-c-1-c">Page:</span>
		{#each Array(4).fill(1) as _, i}
			<span class="caption text-c-1-a" class:text-c-2-a={i + 1 === 3}>{i + 1}</span>
		{/each}
	</div>

	<button
		class="flex items-center gap-[.375rem] rounded-[.75rem]
	border-[2px] border-c-2-b bg-c-2-a px-[1rem] py-[.75rem]"
	>
		<span class="button text-c-1-j">Show more products</span>
		<span class="flex h-[1rem] w-[1rem] items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
				<path
					d="M1.31348 2.03333L4.05348 4.77332C4.17838 4.89749 4.34735 4.96719 4.52348 4.96719C4.6996 4.96719 4.86857 4.89749 4.99348 4.77332L7.66014 2.10666"
					stroke="white"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="bevel"
				/>
			</svg>
		</span>
	</button>

	<div class="flex gap-[.25rem] h-[1.125rem]">
		<div class="px-[.5rem] rounded-[.75rem] bg-c-2-e items-center justify-center"><span class="s6 text-c-2-a block">336</span></div>
		<p class="caption text-c-1-c">Products</p>
	</div>
</div>


<style lang="postcss">
	#select-grid-view:checked ~ div label[for="select-grid-view"] svg {
		@apply stroke-c-2-a;
	}
	#select-list-view:checked ~ div label[for="select-list-view"] svg {
		@apply stroke-c-2-a;
	}

	.grid-view {
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(auto-fill, 1fr);
		column-gap: 2rem;
		row-gap: 3rem;
	}
</style>
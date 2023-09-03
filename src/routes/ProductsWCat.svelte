<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import BasicCategories from './BasicCategories.svelte';

	export let links: { txt: string; href: string }[] = [];
	export let products: { price: number; discount?: number }[] = [];
</script>

<section class="px-[2.8125rem] py-[4rem]">
	<div class="flex gap-[2rem]">
		<BasicCategories {links}><slot slot="title"/></BasicCategories>
		{#each products as product}
			<ProductCard price={product.price} discount={product.discount} />
		{/each}
	</div>
</section>

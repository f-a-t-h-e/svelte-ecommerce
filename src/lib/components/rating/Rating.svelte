<script lang="ts">
	import RatingSvg from './RatingSvg.svelte';
	import calcSlot from './calcSlot';

	export let interactive = false;
	export let rating = 0;
	export let range = 5;
	export let stroke = 'gold';
	export let fill = 'gold';
	export let fillout = 'transparent';
	// export let offset = 50;
	export let size = 20;

	export let slotTarget = RatingSvg;

	export let hoverValue: number | undefined | null = null;
	export let stepValue: number = 0.25;
	let step = stepValue / range;
</script>

<div class="relative flex w-fit">
	{#if interactive}
		<label
			class="absolute right-0 top-1/2 h-fit w-fit -translate-y-1/2 translate-x-[calc(100%+15px)] text-2xl text-white"
			for="rate-product">{parseFloat((rating * 0.01).toFixed(2))}</label
		>
		<input
			id="rate-product"
			type="range"
			name="rating"
			min="0"
			max={range}
			step={stepValue}
			value={rating/100}
			on:change={(e)=>{rating = +e.currentTarget.value*100;
			}}
			on:touchcancel={() => {
				hoverValue = null;
			}}
			on:mouseleave={() => {
				hoverValue = null;
			}}
			on:mousemove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				const x = e.clientX - rect.left;
				hoverValue = Math.round((x / rect.width) * step ** -1) * 500 * step;
			}}
			on:touchmove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				const x = e.targetTouches[0].clientX - rect.left;
				hoverValue = Math.round((x / rect.width) * step ** -1) * 500 * step;
			}}
			on:click={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				const x = e.clientX - rect.left;
				rating = Math.round((x / rect.width) * step ** -1) * 500 * step;
				if (rating > 500) {
					rating = 500;
				} else if (rating < 0) {
					rating = 0;
				}
				hoverValue = null;
			}}
			class="absolute h-full w-full cursor-pointer opacity-0"
		/>
	{/if}

	{#each calcSlot(hoverValue ?? rating, range) as offset}
		<svelte:component this={slotTarget} {offset} {stroke} {fill} {fillout} {size} />
	{/each}
</div>

<script lang="ts">
	import { onMount } from 'svelte';
	let parent: HTMLElement;
	let child: HTMLElement;
	let dist = 360 + 32;
	let move = (dir?: 1 | -1) => {};
	onMount(() => {
		let scrollI = 0;
		dist = (child.firstElementChild?.scrollWidth || 360) + 32;
		// @todo : it's not working properly without this
		setTimeout(() => {
			parent.scrollTo({
				behavior: 'smooth',
				left: dist * 1.5
			});
		}, 0);

		move = (dir = 1) => {
			scrollI = Math.round(parent.scrollLeft / dist) * dist;
			scrollI = scrollI + dist * dir;
			if (scrollI > parent.scrollWidth - parent.clientWidth) {
				scrollI = 0;
			} else if (scrollI < 0) {
				scrollI = parent.scrollWidth - parent.clientWidth;
			}

			parent.scrollTo({
				behavior: 'smooth',
				left: scrollI
			});
		};
		// const interval = setInterval(() => {
		// 	move();
		// }, 3000);

		// return () => clearInterval(interval);
	});
</script>

<!-- 
<div
	class="fixed left-[497px] top-[1088px] h-[100px] w-[10px] -translate-x-1/2 -translate-y-1/2 bg-red-600"
></div> -->
<div class="parent-cont relative w-full">
	<div class="scroll relative w-full overflow-x-auto" bind:this={parent}>
		<div class="bg-transparent" style="width: {(parent?.clientWidth - dist) / 2}px;" />
		<div class="flex w-fit gap-[2rem] px-[1rem]" bind:this={child}>
			<slot />
		</div>
		<div class="bg-transparent" style="width: {(parent?.clientWidth - dist) / 2}px;" />
	</div>
	<!-- controls -->
	<div
		class="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"
		data-shadow="white"
	/>
	<button class="left-0 rounded-r-xl" on:click={() => move(-1)} aria-label="scroll to left">
		<div class="">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="10"
				height="16"
				viewBox="0 0 10 16"
				fill="none"
			>
				<path
					d="M7.93315 1.62671L2.45315 7.10671C2.20482 7.35653 2.06543 7.69446 2.06543 8.04671C2.06543 8.39896 2.20482 8.73689 2.45315 8.98671L7.78649 14.32"
					stroke="white"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="bevel"
				/>
			</svg>
		</div>
	</button>
	<button class="right-0 rotate-180 rounded-r-xl" on:click={() => move(1)} aria-label="scroll to right">
		<div class="">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="10"
				height="16"
				viewBox="0 0 10 16"
				fill="none"
			>
				<path
					d="M7.93315 1.62671L2.45315 7.10671C2.20482 7.35653 2.06543 7.69446 2.06543 8.04671C2.06543 8.39896 2.20482 8.73689 2.45315 8.98671L7.78649 14.32"
					stroke="white"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="bevel"
				/>
			</svg>
		</div>
	</button>
</div>

<style lang="postcss">
	.parent-cont {
		/* background-color: black; */
	}
	div[data-shadow='white']::before {
		@apply absolute left-0 top-1/2 h-[200%] w-0 -translate-y-1/2;
		content: '';
		box-shadow:
			0px 0px 132px 0px white,
			0px 0px 100px 10px white,
			0px 0px 70px 20px white;
	}
	div[data-shadow='white']::after {
		@apply absolute right-0 top-1/2 h-[200%] w-0 -translate-y-1/2;
		content: '';
		box-shadow:
			0px 0px 132px 0px white,
			0px 0px 100px 10px white,
			0px 0px 70px 20px white;
	}
	.scroll::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
	}
	.scroll {
		@apply grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto auto auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	button {
		@apply absolute top-1/2 h-[3rem] w-[2rem]
        -translate-y-1/2 overflow-hidden fill-c-1-a
        pl-[1px] drop-shadow-[0_1px_2px_rgba(0,0,0,.25)];
	}
	button > div {
		@apply flex h-full w-full items-center justify-center bg-c-1-a;
	}
</style>

<script lang="ts">
	import { beforeUpdate, onMount } from 'svelte';

	let max: number = 1000;
	let min: number = 0;
	let track: HTMLElement;
	const voidFN = (..._: any) => {};
	let move = voidFN;
	let moveActiveX = (val: number) => {
		if (val > 1000) {
			max = 1000;
		} else if (val < min + 25) {
			max = min + 25;
		} else {
			max = val;
		}
	};
	let moveActiveN = (val: number) => {
		if (min < 0) {
			min = 0;
		} else if (min > max - 25) {
			min = max -25;
		} else {
			min = val;
		}
	};
	const step = 5;
	// $: filterX(max);
	// $: filterN(min);
	// function filterX(val: string | number) {
	// 	max = `${val}`.replace(/\D/g, '');
	// 	if (max < min) {
	// 		max = min;
	// 	}
	// }
	// function filterN(val: string | number) {
	// 	min = `${val}`.replace(/\D/g, '');
	// 	if (min > max) {
	// 		min = max;
	// 	}
	// }

	// @todo : use getters and setters instead
	beforeUpdate(() => {
		if (max > 1000) {
			max = 1000;
		} else if (min < 0) {
			min = 0;
		} else if (min > max - 25) {
			min = max - 25;
		} else if (max < min + 25) {
			max = min + 25;
		}
	});
    
</script>

<div class="">
	<div
		class="range relative"
		on:pointermove={(e) => {
			if (!!e.pressure) {
				const rect = e.currentTarget.getBoundingClientRect();
				const x = e.clientX - rect.left;

				move(Math.round((x / rect.width) * 1000))/* / step) * step)*/;
			}
		}}
	>
    <!-- <input class="absolute bg-red-400 w-full left-0 p-0" type="range" id="aaa" name="aaa" > -->
    <!-- <input class="absolute bg-red-400 w-full left-0 p-0" type="range" id="bbb"> -->
		<div
			class="track"
			bind:this={track}
			style="background-image: linear-gradient(90deg,
            var(--c-1-e, #EBEBEB) calc(({min}/1000)*100%), var(--c-2-a, #6A983C) calc(({min}/1000)*100%),
            var(--c-2-a, #6A983C) calc(({max}/1000)*100%), var(--c-1-e, #EBEBEB) calc(({max}/1000)*100%));"
		>
			<!-- min -->
			<div class="controller" style="left: calc(({min}/1000)*100%);">
				<div
					role="slider"
					tabindex="0"
					aria-valuemax={max}
					aria-valuemin={0}
					aria-orientation="horizontal"
					aria-label="min"
					aria-valuenow={min}
					on:pointerup={() => {
						move = voidFN;
					}}
					on:pointerdown={(e) => {
                        e.currentTarget.focus()
						move = moveActiveN;
					}}
					on:pointercancel={() => {
						move = voidFN;
					}}
					on:keydown={(e) => {
						if (e.key === 'ArrowRight') {
							e.preventDefault();
                            if (min + step > max - 25) {
                                min = max - 25;
                                return;
                            }
							min += step;
						} else if (e.key === 'ArrowLeft') {
							e.preventDefault();
							min -= step;
						}
					}}
				><input aria-label="min" aria-disabled="true" type="range" min="0" max="0" class="block w-full h-full opacity-0"></div>
			</div>

			<!-- max -->
			<div class="controller" style="left: calc(({max}/1000)*100%);">
				<div
					role="slider"
					tabindex="0"
					aria-valuemax={1000}
					aria-valuemin={min}
					aria-orientation="horizontal"
					aria-label="max"
					aria-valuenow={max}
					on:pointerup={() => {
						move = voidFN;
					}}
					on:pointercancel={() => {
						move = voidFN;
					}}
					on:pointerdown={(e) => {
                        e.currentTarget.focus()
						move = moveActiveX;
					}}
					on:keydown={(e) => {
						if (e.key === 'ArrowRight') {
							e.preventDefault();
							max += step;
						} else if (e.key === 'ArrowLeft') {
							e.preventDefault();
							if (max - step < min+25) {
                                max = min+25;
								return;
							}
							max -= step;
						}
					}}
				><input aria-label="max" aria-disabled="true" type="range" min="0" max="0" class="block w-full h-full opacity-0" ></div>
			</div>
		</div>
	</div>
	<!-- inputs -->
	<div class="inputs">
		<p class="s6 col-[1/2] row-[1/2] text-c-1-a">Min</p>
		<div class="col-[1/2] row-[2/3] flex h-[2.625rem]">
			<input
				class="text-body h-full rounded-[.75rem] border border-solid border-c-1-d bg-c-1-h"
				placeholder="0"
				type="number"
				bind:value={min}
				max={max-25}
				min={0}
				inputmode="numeric"
			/>
		</div>

		<div class="col-[2/3] row-[2/3] my-auto flex h-full items-center justify-center">
			<p class="body text-c-1-c select-none">-</p>
		</div>

		<p class="s6 col-[3/4] row-[1/2] text-c-1-a">Max</p>
		<div class="col-[3/4] row-[2/3] flex h-[2.625rem] w-full">
			<input
				class="text-body h-full rounded-[.75rem] border border-solid border-c-1-d bg-c-1-h"
				placeholder="000"
				type="number"
				bind:value={max}
				min={min+25}
				max={1000}
				inputmode="numeric"
			/>
		</div>
	</div>
    <div class="flex gap-[2.13rem] items-center mt-[1.9375rem]">
        <!-- apply -->
        <button class="btn-filled py-[.75rem] px-[1rem]">
            <span class="button text-c-1-j inline-block">Apply</span>
        </button>
        <!-- reset -->
        <button class="py-[.375rem] px-[.75rem] rounded-[.75rem] bg-c-1-j hover:bg-c-1-e" 
        on:click={()=>{
            max=1000
            min=0
        }}>
            <span class="button text-c-1-c inline-block px-[1px]">Reset</span>
        </button>
    </div>
</div>
<style lang="postcss">
	.range {
		@apply mb-[1rem] flex h-[1.25rem] items-center;
	}
	.track {
		@apply relative h-[.375rem] w-full rounded-full bg-c-1-e flex;
	}
	.controller {
		/* @apply absolute -top-[calc((1.25rem-.375rem)/2)] h-[1.25rem] w-[1.25rem] rounded-full border border-c-1-d bg-c-1-j; */
		@apply absolute top-[calc((.375rem)/2)] h-0 w-0;
	}
	.controller > div {
		@apply h-[1.25rem] w-[1.25rem] -translate-x-1/2 -translate-y-1/2 rounded-[.75rem] border border-solid
                border-c-1-d bg-c-1-h outline-none origin-center cursor-pointer [&_input]:cursor-pointer;
		/* box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); */
		@apply shadow-md;
	}
    @keyframes pulse {
        0% {
            scale: .8;
        }
        40% {
            scale: 1.05;
        }
        100% {
            scale: 1;
        }
    }
    .controller > div:focus-visible, .controller > div:focus, .controller > div:focus-within {
        @apply border-c-2-a border-2 outline outline-offset-0 outline-c-2-a outline-2;
        animation: pulse .25s ease 1;
    }
	input[type="number"] {
		@apply w-full px-[1.3125rem];
	}
	.inputs {
		display: grid;
		grid-template-columns: 6.8125rem auto 6.8125rem;
		grid-template-rows: 1.125rem 2.625rem;
		column-gap: 0.875rem;
	}
</style>

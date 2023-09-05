<script>
	export let txt = 'Show more';
</script>

<div class="button">
	<p class="flex w-full items-center gap-[.12rem]">
		<span class="whitespace-nowrap">{txt}</span>
		<span class="flex h-[.75rem] w-[.75rem] items-center justify-center">
			<svg class="w-[.5rem] h-[0.3125rem]" xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
				<path
					d="M1.61035 1.40001L3.66535 3.45501C3.75903 3.54814 3.88576 3.60041 4.01785 3.60041C4.14994 3.60041 4.27667 3.54814 4.37035 3.45501L6.37035 1.45501"
					stroke="#6A983C"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="bevel"
				/>
			</svg>
		</span>
	</p>
</div>
<!-- <div class="main hidden"></div> -->

<style lang="postcss">
	/* .btn:hover ~ .main {
		@apply block;
	} */
	
</style>

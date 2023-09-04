<script>
	export let txt = 'Show more';
</script>

<div class="btn">
	<p>
		<span class="solid">{txt}</span>
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
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
<div class="main hidden"></div>

<style lang="postcss">
	.btn:hover ~ .main {
		@apply block;
	}
	.btn {
		@apply flex h-full flex-col justify-center text-c-1-a;
		/* Button/Default */
		font-family: Poppins;
		font-size: 0.9375rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	.btn > p {
		@apply flex w-full items-center gap-[.12rem];
	}
    .solid {
        @apply whitespace-nowrap;
    }
	p > span:nth-child(2) {
		@apply flex h-[.75rem] w-[.75rem] items-center justify-center;
	}
	svg {
        @apply w-[.5rem] h-[0.3125rem];
	}
</style>

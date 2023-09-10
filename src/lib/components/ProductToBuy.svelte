<script>
	import Rating from '$lib/components/rating/Rating.svelte';
</script>

<div class="flex w-full flex-wrap gap-[1rem]">
	<!-- img & fast actions -->
	<div class="">
		<!-- img -->
		<div class="mb-[.75rem]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100"
				height="67"
				viewBox="0 0 100 67"
				fill="none"
			>
				<rect width="100" height="67" rx="12" fill="#F9F9F9" />
			</svg>
		</div>
		<!-- fast actions -->
		<div class="[&>div:not(:last-child)]:mb-[.5rem]">
			<div class="flex items-center gap-[0.375rem]">
				<span class="flex h-[.75rem] w-[.75rem] items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="10"
						viewBox="0 0 12 10"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.65559 1.44501C7.13297 0.967619 7.78045 0.699425 8.45559 0.699425C9.13072 0.699425 9.7782 0.967619 10.2556 1.44501C10.733 1.9224 11.0012 2.56988 11.0012 3.24501C11.0012 3.92014 10.733 4.56762 10.2556 5.04501L9.60059 5.70001L6.00059 9.30001L2.40058 5.70001L1.74558 5.04501C1.26819 4.56762 1 3.92014 1 3.24501C1 2.56988 1.26819 1.9224 1.74558 1.44501C2.22297 0.967619 2.87045 0.699425 3.54558 0.699425C4.22072 0.699425 4.86819 0.967619 5.34558 1.44501L6.00059 2.10001L6.65559 1.44501Z"
							stroke="#E6704B"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
					</svg>
				</span>
				<span class="caption text-c-1-c">Wishlist</span>
			</div>
			<div class="flex items-center gap-[0.375rem]">
				<span class="flex h-[.75rem] w-[.75rem] items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="12"
						viewBox="0 0 10 12"
						fill="none"
					>
						<path
							d="M3.75 0.999969H1.75C1.19772 0.999969 0.75 1.44768 0.75 1.99997V3.99997C0.75 4.55225 1.19772 4.99997 1.75 4.99997H3.75C4.30228 4.99997 4.75 4.55225 4.75 3.99997V1.99997C4.75 1.44768 4.30228 0.999969 3.75 0.999969Z"
							stroke="#E6704B"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
						<path
							d="M3.75 6.99997H1.75C1.19772 6.99997 0.75 7.44768 0.75 7.99997V9.99997C0.75 10.5523 1.19772 11 1.75 11H3.75C4.30228 11 4.75 10.5523 4.75 9.99997V7.99997C4.75 7.44768 4.30228 6.99997 3.75 6.99997Z"
							stroke="#E6704B"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
						<path
							d="M9.25 7.99994H6.25"
							stroke="#E6704B"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
						<path
							d="M8.25 9.99997H6.25"
							stroke="#E6704B"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
						<path
							d="M8.25 3.99997H6.25"
							stroke="#E6704B"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
						<path
							d="M9.25 1.99994H6.25"
							stroke="#E6704B"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
					</svg>
				</span>
				<span class="caption text-c-1-c">Compare</span>
			</div>
			<div class="flex items-center gap-[0.375rem]">
				<span class="flex h-[.75rem] w-[.75rem] items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="8"
						height="8"
						viewBox="0 0 8 8"
						fill="none"
					>
						<path
							d="M7.18031 7.18L0.820312 0.82"
							stroke="#151515"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
						<path
							d="M7.18031 0.82L0.820312 7.18"
							stroke="#151515"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
					</svg>
				</span>
				<span class="caption text-c-1-c">Remove</span>
			</div>
		</div>
	</div>

	<!--  -->
	<div class="grow">
		<div class="mb-[1rem]">
			<div class="">
				<p class="s5 mb-[.25rem] text-c-1-a">Product title</p>
				<div class="the-grid">
					<span class="caption text-c-1-c">Farm:</span>
					<span class="caption text-c-1-a">Tharamis Farm</span>
					<span class="caption text-c-1-c">Freshness:</span>
					<span class="caption text-c-1-a">1 day old</span>
				</div>
			</div>
            <div class="mt-[.5rem]">
                <Rating fill="#FDBC15" stroke="#EBEBEB" rating={400} />
            </div>
		</div>

        <!-- price & controllers -->
			<div
            class="flex h-fit w-full items-center justify-between gap-1"
        >
            <!-- price -->
            <div class="flex flex-col">
                <p class="s4 text-c-2-b">36.23 USD</p>
                <span class="s6 text-c-1-c line-through">48.56 USD</span>
            </div>
            <!-- buttons -->
            <button
                class="flex h-fit items-center gap-[0.375rem] rounded-[.75rem] border-[1px] border-c-1-d bg-c-1-h p-[0.3125rem]"
            >
                <span class="body text-c-1-b">1pcs</span>
                <div class="h-[1.25rem] w-[0.0625rem] bg-c-1-d" />

                <div class="flex items-center gap-[.25rem]">
                    <span class="s6 text-c-1-a">Pcs</span>
                    <span class="flex h-[.75rem] w-[.75rem] items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                        >
                            <path
                                d="M4.4375 5.39999L6.4925 7.455C6.58618 7.54812 6.71291 7.60039 6.845 7.60039C6.97709 7.60039 7.10382 7.54812 7.1975 7.455L9.1975 5.45499"
                                stroke="#151515"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="bevel"
                            />
                        </svg>
                    </span>
                </div>
            </button>

        </div>
	</div>
</div>

<style lang="postcss">
	.the-grid {
		@apply grid;
		grid-template-columns: min-content auto;
		column-gap: 0.875rem;
		row-gap: 0.25rem;
	}
</style>

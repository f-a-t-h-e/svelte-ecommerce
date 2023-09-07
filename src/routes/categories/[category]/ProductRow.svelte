<script>
	import { page } from '$app/stores';
	import Rating from '$lib/components/rating/Rating.svelte';
</script>

<div class="flex h-[17.5rem] w-[54.3125rem] overflow-hidden rounded-[.75rem] border-[1px] border-c-1-d bg-c-1-j">
	<!-- img -->
	<div class="h-[17.375rem] w-[16.75rem] rounded-l-[.75rem] bg-c-1-h" />

	<!-- detail -->
	<div class="px-[2rem] flex gap-[6rem] pt-[2rem] ml-auto">
		<div class="flex flex-col gap-[1.5625rem]">
			<!--  -->
			<div class="">
				<!-- title -->
				<p class="s4 mb-[.25rem] text-c-1-a"><a href="/categories/{$page.params.category}/{"Carrots from Tomissy Farm"}">Product title</a></p>
				<!-- description -->
				<p class="caption mb-[.5rem] text-c-1-b">Space for a small product description</p>

				<Rating fill="#151515" stroke="#EBEBEB" rating={400} size={20} />
			</div>

			<!--  -->
			<div class="product-detail">
				<p class="body text-c-1-c">Fresheness</p>
				<p class="body text-c-1-c">
					<span class="px-[.5px] text-c-2-a">New</span>{' (Extra fresh)'}
				</p>

				<p class="body text-c-1-c">Farm</p>
				<p class="body text-c-1-c">Grocery Tarm Fields</p>

				<p class="body text-c-1-c">Delivery</p>
				<p class="body text-c-1-c">Europe</p>

				<p class="body text-c-1-c">Stock</p>
				<p class="body text-c-2-a">320 pcs</p>
			</div>
		</div>

		<!-- price detail -->
		<div class="">
			<p class="s4 text-c-1-a">36.99 USD</p>
			<p class="s6 text-c-1-c line-through">48.56</p>

            <p class="s6 text-c-1-c mt-[1rem]">48.56</p>
            <p class="caption text-c-1-c">Delivery in 1 day</p>

            <button class="mt-[1.62rem] ml-[.5rem]
            rounded-[.75rem] border-[2px] border-c-2-b bg-c-2-a 
            py-[.75rem] px-[1rem] flex gap-[.375rem] items-center">
            <span class="button text-c-1-j">Product Detail</span>
            <span class="w-[1rem] h-[1rem] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                    <path d="M1.79004 7.68669L4.53004 4.94669C4.65421 4.82178 4.7239 4.65282 4.7239 4.47669C4.7239 4.30057 4.65421 4.1316 4.53004 4.00669L1.86337 1.34003" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                  </svg>
            </span>
            </button>

            <button class="mt-[.75rem] ml-auto flex h-[2.25rem] py-[.375rem] px-[.75rem] items-center
            rounded-[.75rem] bg-c-1-f gap-[.5rem]">
            <span class="w-[1rem] h-[1rem] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13062 2.26001C9.76714 1.62349 10.6304 1.2659 11.5306 1.2659C12.4308 1.2659 13.2941 1.62349 13.9306 2.26001C14.5671 2.89653 14.9247 3.75984 14.9247 4.66001C14.9247 5.56019 14.5671 6.42349 13.9306 7.06001L13.0573 7.93334L8.25729 12.7333L3.45729 7.93334L2.58396 7.06001C1.94744 6.42349 1.58984 5.56019 1.58984 4.66001C1.58984 3.75984 1.94744 2.89653 2.58396 2.26001C3.22048 1.62349 4.08378 1.2659 4.98396 1.2659C5.88413 1.2659 6.74744 1.62349 7.38396 2.26001L8.25729 3.13335L9.13062 2.26001Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </span>
            <span class="button text-c-1-a">Add to wish list</span>
        </button>
		</div>

	</div>
</div>

<style lang="postcss">
	.product-detail {
		display: grid;
		grid-template-columns: max-content max-content;
		grid-template-rows: repeat(auto-fill, 1fr);
		column-gap: 2rem;
		row-gap: 0.75rem;
	}
</style>

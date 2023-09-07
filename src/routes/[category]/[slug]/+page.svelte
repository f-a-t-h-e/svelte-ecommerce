<script>
	import { page } from '$app/stores';
	import Rating from '$lib/components/rating/Rating.svelte';
	import Table from './Table.svelte';
</script>

<div class="flex bg-c-1-j px-[2.8125rem] py-[1rem]">
	<p class="caption text-c-1-c"><a href="/">Homepage</a></p>
	<span class="caption mx-[.5rem] text-c-1-d">/</span>
	<p class="caption text-c-1-c"><a href="/{$page.params.category}">{$page.params.category}</a></p>
	<span class="caption mx-[.5rem] text-c-1-d">/</span>
	<p class="caption text-c-1-a">{$page.params.slug}</p>
</div>

<main class="flex w-[78.75rem] gap-[2rem] px-[2.8125rem] py-[1rem]">
	<!-- images -->
	<div class="flex flex-col gap-[2rem]">
		<div class="relative h-[27.25rem] w-[35.5625rem]">
			<!-- img -->
			<div class="h-[27.25rem] w-[35.5625rem] rounded-[.75rem] bg-c-1-h" />
			<!-- extras -->
			<div class="absolute left-[1rem] top-[1rem] flex gap-[.75rem]">
				<p class="flex rounded-[.75rem] bg-c-2-e px-[.625rem] py-[.25rem]">
					<span class="s6 text-c-2-a">- 36 %</span>
				</p>

				<p class="flex rounded-[.75rem] bg-c-2-e px-[.625rem] py-[.25rem]">
					<span class="s6 text-c-2-a">Free shipping</span>
				</p>
			</div>
		</div>

		<div class="h-[27.25rem] w-[35.5625rem]">
			<!-- img -->
			<div class="h-[27.25rem] w-[35.5625rem] rounded-[.75rem] bg-c-1-h" />
		</div>

		<div class="h-[27.25rem] w-[35.5625rem]">
			<!-- img -->
			<div class="h-[27.25rem] w-[35.5625rem] rounded-[.75rem] bg-c-1-h" />
		</div>
	</div>

	<!-- details -->
	<div class="flex w-full flex-col gap-[3.875rem]">
		<!-- title & details -->
		<div class="flex flex-col gap-[2.5rem]">
			<!-- title & rating -->
			<div class="">
				<h1 class="s1 text-c-1-a">{$page.params.slug}</h1>
				<div class="mt-[.5rem] flex gap-[.5rem]">
					<Rating rating={400} />
					<span class="caption text-c-1-c"
						>(<span class="underline decoration-[.25px] underline-offset-[.75px]"
							>1 customer review</span
						>)</span
					>
				</div>
			</div>
			<!-- medium description -->
			<p class="lead text-c-1-a">
				{`Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.`}
			</p>
			<!-- details -->
			<div
				class="details-area [&_span]:body [&_p]:body
            [&_p]:text-c-1-a [&_span]:text-c-1-c"
			>
				<div class="">
					<span>SKU:</span>
					<p>76645</p>
					<!--  -->
					<span>Category:</span>
					<p class="underline decoration-[.25px]">Vegetables</p>
					<!--  -->
					<span>Stock:</span>
					<p data-change="color" class="underline decoration-[.25px]">In Stock</p>
					<!--  -->
					<span>Farm</span>
					<p>Grocery Tarm Fields</p>
				</div>
				<!--  -->
				<div class="">
					<span>Freshness:</span>
					<p>1 days old</p>
					<!--  -->
					<span>Buy by:</span>
					<p>pcs, kgs, box, pack</p>
					<!--  -->
					<span>Delivery:</span>
					<p>in 2 days</p>
					<!--  -->
					<span>Delivery area</span>
					<p>Czech republic</p>
				</div>
			</div>
			<!-- price & controllers -->
			<div class="flex flex-col gap-[1.5rem]">
				<div
					class="flex h-fit max-w-[33.375rem] items-center rounded-[.75rem] border-[1px] border-c-1-f bg-c-1-j p-[1rem]"
				>
					<!-- price -->
					<div class="flex flex-col">
						<p class="s2 text-c-2-a">36.23 USD</p>
						<span class="s6 text-c-1-c line-through">48.56 USD</span>
					</div>
					<!-- buttons -->
					<button
						class="ml-auto mr-[1.5rem] inline-flex h-fit items-center gap-[1rem] rounded-[.75rem] border-[1px] border-c-1-d bg-c-1-h px-[.9375rem] py-[0.8125rem]"
					>
						<span class="body text-c-1-d">1</span>
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

					<button class="btn-filled px-[.9375rem] py-[.6875rem]">
						<span class="svg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
							>
								<path
									d="M12.1608 7H1.49414"
									stroke="white"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="bevel"
								/>
								<path
									d="M6.82812 12.3333V1.66667"
									stroke="white"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="bevel"
								/>
							</svg>
						</span>
						<span>Add to cart</span>
					</button>
				</div>

				<div class="flex gap-[1rem]">
					<button class="with-icon bg-c-1-j px-[.75rem] py-[0.375rem]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="15"
							viewBox="0 0 16 15"
							fill="none"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8.70094 2.76001C9.33746 2.12349 10.2008 1.7659 11.1009 1.7659C12.0011 1.7659 12.8644 2.12349 13.5009 2.76001C14.1375 3.39653 14.4951 4.25984 14.4951 5.16001C14.4951 6.06019 14.1375 6.92349 13.5009 7.56001L12.6276 8.43334L7.8276 13.2333L3.0276 8.43334L2.15427 7.56001C1.51775 6.92349 1.16016 6.06019 1.16016 5.16001C1.16016 4.25984 1.51775 3.39653 2.15427 2.76001C2.79079 2.12349 3.65409 1.7659 4.55427 1.7659C5.45444 1.7659 6.31775 2.12349 6.95427 2.76001L7.8276 3.63335L8.70094 2.76001Z"
								stroke="#E6704B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<span>Add to my wish list</span>
					</button>
					<button class="with-icon bg-c-1-j px-[.75rem] py-[0.375rem]">
						<span class="svg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="17"
								viewBox="0 0 14 17"
								fill="none"
							>
								<path
									d="M5.16211 1.83334H2.49544C1.75906 1.83334 1.16211 2.4303 1.16211 3.16668V5.83334C1.16211 6.56972 1.75906 7.16668 2.49544 7.16668H5.16211C5.89849 7.16668 6.49544 6.56972 6.49544 5.83334V3.16668C6.49544 2.4303 5.89849 1.83334 5.16211 1.83334Z"
									stroke="#E6704B"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M5.16211 9.83334H2.49544C1.75906 9.83334 1.16211 10.4303 1.16211 11.1667V13.8333C1.16211 14.5697 1.75906 15.1667 2.49544 15.1667H5.16211C5.89849 15.1667 6.49544 14.5697 6.49544 13.8333V11.1667C6.49544 10.4303 5.89849 9.83334 5.16211 9.83334Z"
									stroke="#E6704B"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M12.4961 11.1667H8.49609"
									stroke="#E6704B"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M11.1628 13.8333H8.49609"
									stroke="#E6704B"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M11.1628 5.83334H8.49609"
									stroke="#E6704B"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M12.4961 3.16669H8.49609"
									stroke="#E6704B"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>

						<span>Compare</span>
					</button>
				</div>
			</div>
		</div>

		<!-- description, reviews & questions -->
		<div class="desc-rev-que">
			<input type="radio" name="show-sction" id="select-description-sec" checked />
			<input type="radio" name="show-sction" id="select-reviews-sec" />
			<input type="radio" name="show-sction" id="select-questions-sec" />
			<header class="[&_label>div>span]:s4 [&_label>div>div>span]:s6">
				<div class="col-[1/4] row-[2/3] h-[1px] w-full bg-c-1-f" />
				<div class="row-[2/3] flex h-[1px] w-full bg-c-2-a" />
				<label class="" for="select-description-sec">
					<div class="">
						<span class="">Description</span>
					</div>
				</label>

				<label class="" for="select-reviews-sec"
					><div class="">
						<span class="">Reviews</span>
						<div class="">
							<span class="">18</span>
						</div>
					</div>
				</label>
				<label class="" for="select-questions-sec">
					<div class="">
						<span class="">Questions</span>
						<div class="">
							<span class="">4</span>
						</div>
					</div>
				</label>
			</header>
			<section data-for="select-description-sec"
			class="flex flex-col gap-[2rem]"
			>
			<!-- heading -->
			<div class="px-[1px]">
				<p class="s5 mb-[.5rem] text-c-1-a">Origins</p>
				<p class="body text-c-1-a">We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.
				</p>
			</div>
			<div class="px-[1px]">
				<p class="s5 mb-[.5rem] text-c-1-a">How to cook</p>
				<p class="body text-c-1-a">From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
			</div>
			<div class="">
				<p class="s5 mb-[1rem] text-c-1-a">Full of Vitamins!</p>
				
				<Table rows={[
					["Vitamin A equiv.", "735 μg", "104 %"],
					["Thiamine (B1)", "0.066 mg", "6 %"],
					["Niacin (B3)", "0.983 mg", "7 %"],
					["Folate (Bg)", "19 μg", "5 %"],
					["Vitamin C", "5.9 mg", "7 %"],
					["Vitamin E", "0.66 mg", "4 %"],
					["Vitamin K", "13.2", "13 %"],
				]}/>
				
			</div>
		</section>
			<section data-for="select-reviews-sec"></section>
			<section data-for="select-questions-sec"></section>
		</div>
		<!--  -->
	</div>
</main>

<style lang="postcss">
	.details-area {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 2rem;
	}
	.details-area > div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* column-gap: 1rem; */
		row-gap: 0.75rem;
	}
	.details-area > div p[data-change='color'] {
		@apply text-c-2-a;
	}
	header {
		@apply w-full mb-[3rem];
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto 1px;
		/* column-gap: 1rem; */
	}

	header label {
		@apply /*hover:bg-c-1-f*/ flex w-full cursor-pointer justify-center pb-[1rem];
	}
	header label > div {
		@apply flex items-center gap-[.5rem];
	}
	header label > div span {
		@apply block;
	}
	header label > div > span {
		@apply text-c-1-a;
	}
	header label > div > div {
		@apply rounded-[.75rem] bg-c-2-e px-[.5rem];
	}
	header label > div > div {
		@apply text-c-2-a;
	}
	#select-description-sec:checked ~ header > div:nth-child(2) {
		@apply col-[1/2];
	}
	#select-reviews-sec:checked ~ header > div:nth-child(2) {
		@apply col-[2/3];
	}
	#select-questions-sec:checked ~ header > div:nth-child(2) {
		@apply col-[3/4];
	}
	section[data-for='select-description-sec'],
	section[data-for='select-reviews-sec'],
	section[data-for='select-questions-sec'] {
		display: none;
	}
	#select-description-sec:checked ~ section[data-for='select-description-sec'] {
		display: flex;
	}
	#select-reviews-sec:checked ~ section[data-for='select-reviews-sec'] {
		display: flex;
	}
	#select-questions-sec:checked ~ section[data-for='select-questions-sec'] {
		display: flex;
	}
</style>

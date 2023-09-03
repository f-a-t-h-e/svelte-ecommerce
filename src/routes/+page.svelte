<script>
	import Search from './Search.svelte';
	import Personal from './Personal.svelte';
	import DropMenuBtn from '$lib/components/DropMenuBtn.svelte';
	import HeadingSec from './HeadingSec.svelte';
</script>

<div class="header-layout">
	<div class="">
		<div class="h-inline">
			<p class="text-c-2-a">Chat with us</p>
			<p class="text-c-1-a">+420 336 775 664</p>
			<p class="text-c-1-a">info@freshnesecom.com</p>
		</div>

		<div class="h-inline">
			<a href="/">Blog</a>
			<a href="/">About Us</a>
			<a href="/">Careers</a>
		</div>
	</div>
	<div class="">
		<!-- logo -->
		<div class="mr-1 h-[3.125rem]">
			<div class="inline-flex py-[1rem]">
				<div class="h-[1.125rem] w-[11.0625rem] bg-[url(./logo.svg)]"></div>
			</div>
		</div>
		<Search />
		<Personal />
	</div>
</div>
<!-- categories filter-nav -->
<div class="cat-filter-nav">
	<div class="flex w-full gap-[2.5rem]">
		<DropMenuBtn txt="Bakery" />
		<DropMenuBtn txt="Fruit and vegetables" />
		<DropMenuBtn txt="Meat and fish" />
		<DropMenuBtn txt="Drinks" />
		<DropMenuBtn txt="Kitchen" />
		<DropMenuBtn txt="Special nutrition" />
		<DropMenuBtn txt="Baby" />
		<DropMenuBtn txt="Pharmacy" />
	</div>
</div>
<main class="mx-auto max-w-[78.75rem]">
	<section class="px-[2.8125rem] py-[4rem]">
		<div class="flex h-full max-w-full gap-[2rem]">
			<!-- cat menu -->
			<div class="flex flex-col gap-[3rem] w-[16.8125rem]">
				<div class="">
					<p class="s4 mb-[1rem] text-c-1-a">Category menu</p>
					<div
						class="[&>a]:body flex
						flex-col gap-[.75rem] [&>a]:text-c-2-a
						"
					>
						<a href="/">Bakery</a>
						<a href="/">Fruit and vegetables</a>
						<a href="/">Meat and fish</a>
						<a href="/">Drinks</a>
						<a href="/">Kitchen</a>
					</div>
				</div>
				<a
					href="/"
					class="button
				flex h-[3rem]
				items-center gap-[0.375rem] whitespace-nowrap
				rounded-[0.75rem] bg-c-1-f
				px-[1rem] text-c-1-a
				"
					><span>More categories</span><span
						class="flex h-[1rem] w-[1rem] items-center justify-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="7"
							height="10"
							viewBox="0 0 7 10"
							fill="none"
						>
							<path
								d="M2.0332 8.18669L4.7732 5.44669C4.89737 5.32178 4.96706 5.15281 4.96706 4.97669C4.96706 4.80056 4.89737 4.63159 4.7732 4.50669L2.10654 1.84002"
								stroke="#151515"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="bevel"
							/>
						</svg>
					</span></a
				>
			</div>
			<!-- space for heading -->
			<HeadingSec />
			<HeadingSec />
		</div>
	</section>
</main>

<style lang="postcss">
	.header-layout {
		@apply max-w-[78.75rem] flex flex-col items-center bg-c-1-j mx-auto;
	}

	.header-layout > div:first-child {
		@apply flex min-h-[3rem] w-full max-w-[78.75rem] flex-wrap-reverse items-center justify-center gap-[1rem] py-[1rem];
	}
	.header-layout > div:nth-child(2) {
		@apply flex h-[3rem] w-full justify-between;
		max-width: 73.125rem;
		/* flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start; */
	}
	.header-layout > div > .h-inline {
		@apply m-auto;
		display: inline-flex;
		align-items: center;
		gap: 2.0625rem;
	}
	.header-layout > div > .h-inline > p {
		font-family: Open Sans;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.header-layout > div > .h-inline > a {
		color: var(--c-2-a, #6a983c);
		font-family: Open Sans;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	/*  */
	.cat-filter-nav {
		@apply mx-auto flex  max-w-[78.75rem] bg-c-1-h;
		padding: 1rem 2.8125rem;
	}
</style>

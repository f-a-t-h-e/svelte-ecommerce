<script>
	import { page } from '$app/stores';
	import DropMenuBtn from '$lib/components/DropMenuBtn.svelte';
	import '../app.css';
	import Personal from './Personal.svelte';
	import Search from './Search.svelte';
</script>

<div class="mx-auto w-fit min-w-[78.75rem] bg-c-1-j">
	<header class="mx-auto flex max-w-[78.75rem] flex-col items-center bg-c-1-j px-[2.8125rem]">
		<div class="flex min-h-[3rem] w-full justify-between py-[1rem]">
			<div class="[&>p]:caption inline-flex items-center gap-[2.0625rem]">
				<p class="text-c-2-a">Chat with us</p>

				<p class="text-c-1-a">+420 336 775 664</p>
				<p class="text-c-1-a">info@freshnesecom.com</p>
			</div>

			<div class="[&>a]:caption inline-flex items-center gap-[2.0625rem] [&>a]:text-c-2-a">
				<a href="/">Blog</a>
				<a href="/">About Us</a>
				<a href="/">Careers</a>
			</div>
		</div>
		<hr class="h-[1px] w-full border-none bg-c-1-a opacity-5" />

		<div class="flex w-full justify-between py-[2.5rem]">
			<!-- logo -->
			<div class="mr-1 h-[3.125rem]">
				<div class="inline-flex py-[1rem]">
					<div class="h-[1.125rem] w-[11.0625rem] bg-[url(/logo.svg)]"></div>
				</div>
			</div>
			<Search />
			<Personal />
		</div>
	</header>
	<!-- categories filter-nav -->
	<div class="bg-c-1-h px-[2.8125rem] mx-auto max-w-[78.75rem]">
		<div class="flex w-full gap-[2.5rem] py-[1rem]">
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

	<slot />

	<footer class="flex flex-col items-center gap-[3rem] bg-c-1-j px-[2.81rem] py-[4rem]">
		{#if $page.route.id !== '/checkout'}
			<!-- lists of menus -->
			<div class="flex w-full justify-between">
				<!-- list 1 -->
				<div class="flex flex-col gap-[1rem]">
					<p class="s4 text-c-1-a">Get in touch</p>

					<p class="body text-c-2-a">About Us</p>
					<p class="body text-c-2-a">Careers</p>
					<p class="body text-c-2-a">Press Releases</p>
					<p class="body text-c-2-a">Blog</p>
				</div>
				<!-- list 1 -->
				<div class="flex flex-col gap-[1rem]">
					<p class="s4 text-c-1-a">Connections</p>

					<p class="body text-c-2-a">Facebook</p>
					<p class="body text-c-2-a">Twitter</p>
					<p class="body text-c-2-a">Instagram</p>
					<p class="body text-c-2-a">Youtube</p>
					<p class="body text-c-2-a">LinkedIn</p>
				</div>
				<!-- list 1 -->
				<div class="flex flex-col gap-[1rem]">
					<p class="s4 text-c-1-a">Earnings</p>

					<p class="body text-c-2-a">Become an Affiliate</p>
					<p class="body text-c-2-a">Advertise your product</p>
					<p class="body text-c-2-a">Sell on Market</p>
				</div>
				<!-- list 1 -->
				<div class="flex flex-col gap-[1rem]">
					<p class="s4 text-c-1-a">Account</p>
					<p class="body text-c-2-a">Your account</p>
					<p class="body text-c-2-a">Returns Centre</p>
					<p class="body text-c-2-a">100 % purchase protection</p>
					<p class="body text-c-2-a">Chat with us</p>
					<p class="body text-c-2-a">Help</p>
				</div>
			</div>

			<!-- products tags -->
			<div class="tags w-full">
				<p class="s4 mb-[1rem] text-c-1-a">Product tags</p>

				<!-- tags -->
				<div class="[&_span]:s6">
					{#each ['Beans', 'Carrots', 'Apples', 'Garlic', 'Mushrooms', 'Tomatoes', 'Chilli peppers', 'Broccoli', 'Watermelons', 'Oranges', 'Bananas', 'Grapes', 'Cherries', 'Meat', 'Seo tag', 'Fish', 'Seo tag', 'Fresh food', 'Lemons'] as tagTxt}
						<div class="">
							<span class="">{tagTxt}</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- copyright -->
		<div class="">
			<p>Copyright © {new Date().getFullYear()} example.com</p>
		</div>
	</footer>
</div>

<style lang="postcss">
	/* .sh {
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
	} */

	footer > .tags > div {
		@apply flex flex-wrap gap-[1rem];
	}
	footer > .tags > div > div {
		@apply flex items-center justify-center rounded-[.75rem] bg-c-1-f px-[.625rem] py-[.25rem];
	}
	footer > .tags > div span {
		@apply text-c-1-a;
	}
</style>

<script>
	import '@fontsource/poppins/700.css'
	import Search from "./Search.svelte";
	import Personal from './Personal.svelte';

</script>

<div class="header-layout">
	<div class="py-[1rem]">
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
		<div class="h-[3.125rem] mr-1">
			<div class="inline-flex py-[1rem]">
				<div class="w-[11.0625rem] h-[1.125rem] bg-[url(./logo.svg)]"></div>
			</div>
		</div>
		<Search />
		<Personal />
	</div>
</div>

<style lang="postcss">
	.header-layout {
		display: flex;
		padding: 0rem 5rem;
		flex-direction: column;
		align-items: center;

		background: var(--c-1-j, #fff);
	}
	.header-layout > div {
		@apply flex h-[3rem] w-full justify-between;
		max-width: 73.125rem;
		/* flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start; */
	}
	.header-layout > div > .h-inline {
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
</style>

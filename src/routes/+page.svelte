<script>
	import Search from './Search.svelte';
	import Personal from './Personal.svelte';
	import DropMenuBtn from '$lib/components/DropMenuBtn.svelte';
	import HeadingSec from './HeadingSec.svelte';
	import ProductsWCat from './ProductsWCat.svelte';
	import BasicCategories from './BasicCategories.svelte';
	import Qoute from './Qoute.svelte';
	import Scrollable from '$lib/components/Scrollable.svelte';
	import HeadingWBtn from '$lib/components/HeadingWBtn.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
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
	<!-- headings & cat-menu section -->
	<section class="px-[2.8125rem] py-[4rem]">
		<div class="flex h-full max-w-full gap-[2rem]">
			<!-- cat menu -->
			<BasicCategories
				links={[
					{ txt: 'Bakery', href: '/' },
					{ txt: 'Fruit and vegetables', href: '/' },
					{ txt: 'Meat and fish', href: '/' },
					{ txt: 'Drinks', href: '/' },
					{ txt: 'Kitchen', href: '/' }
				]}>More categories</BasicCategories
			>
			<!-- space for heading -->
			<HeadingSec />
			<HeadingSec />
		</div>
	</section>

	<!-- products with cat sections -->
	<ProductsWCat
		links={[
			{ txt: 'Kitchen', href: '/' },
			{ txt: 'Meat and fish', href: '/' },
			{ txt: 'Special nutrition', href: '/' },
			{ txt: 'Pharmacy', href: '/' },
			{ txt: 'Baby', href: '/' }
		]}
		products={[{ price: 148 }, { price: 4856, discount: 39 }, { price: 4856, discount: 20 }]}
		>Best selling products</ProductsWCat
	>
	<ProductsWCat
		links={[
			{ txt: 'Carrots', href: '/' },
			{ txt: 'Tomatoes', href: '/' },
			{ txt: 'Potatoes', href: '/' },
			{ txt: 'Chicken', href: '/' },
			{ txt: 'Meat', href: '/' }
		]}
		products={[{ price: 148 }, { price: 4856, discount: 39 }, { price: 4856, discount: 20 }]}
		>Best from Farmers</ProductsWCat
	>
	<!-- QOUTES/Scrollable -->
	<section class="py-[4rem] border border-c-1-h bg-c-1-j flex flex-col items-center gap-[2rem]">
		<!-- heading -->
		<HeadingWBtn>Our customers says</HeadingWBtn>
		<!-- qoutes -->
		<Scrollable>
			<Qoute
				>{'This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here'}</Qoute
			>
			<Qoute
				>{'This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here'}</Qoute
			>
			<Qoute
				>{'This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here'}</Qoute
			>
			<Qoute
				>{'This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here'}</Qoute
			>
		</Scrollable>
	</section>

	<!-- Products With title -->
	<section class="py-[4rem] bg-c-1-j flex flex-col items-center gap-[2rem] px-[2.81rem]">
		<!-- heading -->
		<HeadingWBtn>Section Headline</HeadingWBtn>

		<!-- Products -->
		<div class="flex gap-[2rem]">
			<ProductCard price={326}/>
			<ProductCard price={148}/>
			<ProductCard price={4856} discount={36}/>
			<ProductCard price={112}/>
		</div>
	</section>
</main>

<style lang="postcss">
	.header-layout {
		@apply mx-auto flex max-w-[78.75rem] flex-col items-center bg-c-1-j px-[2.8125rem];
	}

	.header-layout > div:first-child {
		@apply flex min-h-[3rem] w-full flex-wrap-reverse items-center justify-center gap-[1rem] py-[1rem] md:justify-between;
	}
	.header-layout > div:nth-child(2) {
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
	.cat-filter-nav {
		@apply mx-auto flex  max-w-[78.75rem] bg-c-1-h;
		padding: 1rem 2.8125rem;
	}
</style>

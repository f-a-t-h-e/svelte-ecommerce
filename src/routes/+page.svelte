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
	import BlogArea from './BlogArea.svelte';
</script>

<main class="mx-auto max-w-[78.75rem]">
	<!-- headings & cat-menu section -->
	<section class="px-[2.8125rem] py-[4rem]">
		<div class="flex h-full max-w-full gap-[2rem]">
			<!-- cat menu -->
			<BasicCategories
				links={[
					{ txt: 'Bakery', href: '/Bakery' },
					{ txt: 'Fruit and vegetables', href: '/Fruit and vegetables' },
					{ txt: 'Meat and fish', href: '/Meat and fish' },
					{ txt: 'Drinks', href: '/Drinks' },
					{ txt: 'Kitchen', href: '/Kitchen' }
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
	<section class="flex flex-col items-center gap-[2rem] border border-c-1-h bg-c-1-j py-[4rem]">
		<!-- heading -->
		<div class="flex w-full items-center justify-between px-[2.8125rem]">
			<p class="s4 text-c-1-a">Our customers says</p>
			<button class="flex items-center gap-[.375rem] p-[.375rem_.75rem]">
				<p class="button text-c-1-a">Button</p>
				<span class="flex h-[1rem] w-[1rem] items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="6"
						height="9"
						viewBox="0 0 6 9"
						fill="none"
					>
						<path
							d="M1.5332 7.68663L4.2732 4.94663C4.39737 4.82172 4.46706 4.65276 4.46706 4.47663C4.46706 4.30051 4.39737 4.13154 4.2732 4.00663L1.60654 1.33997"
							stroke="#6A983C"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="bevel"
						/>
					</svg>
				</span>
			</button>
		</div>
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
	<section class="flex flex-col items-center gap-[2rem] bg-c-1-j px-[2.81rem] py-[4rem]">
		<!-- heading -->
		<HeadingWBtn>Section Headline</HeadingWBtn>

		<!-- Products -->
		<div class="flex gap-[2rem]">
			<ProductCard price={326} />
			<ProductCard price={148} />
			<ProductCard price={4856} discount={36} />
			<ProductCard price={112} />
		</div>
	</section>

	<!-- Blog section -->
	<section class="flex flex-col items-center gap-[2rem] bg-c-1-j px-[2.81rem] py-[4rem]">
		<!-- heading -->
		<HeadingWBtn>Read our Blog posts</HeadingWBtn>

		<!-- Blog area -->
		<BlogArea />
	</section>
</main>


<style lang="postcss">
	

	section {
		@apply py-[4rem];
	}

	
</style>

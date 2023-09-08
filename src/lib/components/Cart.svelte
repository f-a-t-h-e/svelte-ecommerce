<script lang="ts">
	import ProductToBuy from "./ProductToBuy.svelte";

    let H = 0;
</script>
<svelte:window bind:innerHeight={H}/>
<aside style="height: {H ? H +"px" : "100vh"};">
    <header class="flex w-full justify-between gap-1 items-center pt-[1.5rem] px-[1rem]">
        <h2 class="s2 text-c-1-a">Shopping cart</h2>
        <label for="show-hide-cart" class="cursor-pointer flex items-center gap-[.25rem]">
            <span class="caption text-c-1-d">Close</span>
            <span class="w-[1.5rem] h-[1.5rem] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14.3606 14.36L1.64062 1.63995" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                    <path d="M14.3606 1.63995L1.64062 14.36" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                  </svg>
            </span>
        </label>
    </header>

    <!-- products -->
    <div class="grow w-full flex flex-col gap-[3rem] px-[1rem]">
        <ProductToBuy />
        <ProductToBuy />
    </div>

    <!-- price -->
    <div class="px-[1rem]">
        <span class="s6 text-c-1-a mb-[.5rem]">Subtotal</span>
        <span class="s2 text-c-1-a">73.98 USD</span>
    </div>

    <div class="border-t border-t-c-1-e p-[1rem] flex w-full items-center justify-between">
        <span class="button text-c-1-a">Continue shopping</span>

        <a href="/checkout" class="btn-filled py-[.75rem] px-[1rem]">
            <span>Go to Checkout</span>
        </a>
    </div>
</aside>


<style lang="postcss">
    aside{
        @apply w-[25rem] max-w-[100vw] overflow-auto bg-c-1-j  flex flex-col gap-[1.5rem];
        box-shadow: 0px 2px 32px 0px rgba(0, 0, 0, 0.15);
    }
</style>
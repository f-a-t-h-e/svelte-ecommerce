<script lang="ts">
	import Rating from "$lib/components/rating/Rating.svelte";
	import Star from "$lib/components/rating/Star.rating.svelte";

    let ratings = Array(5).fill(undefined).map((_, i)=>(5-i)*100);
</script>
<div class="max-w-[16.75rem]">
    <p class="s4 text-c-1-a mb-[1rem]">Rating</p>

    <div class="flex flex-col gap-[.75rem]">
        {#each ratings as rating}
            <label class="">
                <input class="peer" type="checkbox" hidden >
                <div class="">
                    <svg class="empty" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M19 1.00003H3C1.89543 1.00003 1 1.89546 1 3.00003V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V3.00003C21 1.89546 20.1046 1.00003 19 1.00003Z" stroke="#D1D1D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                      </svg>
                      <svg class="filled" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M19 1.00003H3C1.89543 1.00003 1 1.89546 1 3.00003V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V3.00003C21 1.89546 20.1046 1.00003 19 1.00003Z" fill="#6A983C" stroke="#46760A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                        <path d="M5.55957 11.85L8.61957 14.91L16.4396 7.09003" stroke="#FDFDFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                </div>
                <Rating {rating} slotTarget={Star} interactive={false} stroke="#D1D1D1" fill="#FDBC15"/>
            </label>
        {/each}
    </div>
</div>

<style lang="postcss">
     label {
		@apply flex gap-[.5rem] items-center cursor-pointer;
	}
	 label > div {
		@apply flex h-[calc(1.5rem-2px)] w-[calc(1.5rem-2px)] items-center justify-center;
	}
	 label > div svg.filled {
		@apply hidden;
	}
	 .peer:checked ~ div svg.filled {
		@apply block;
	}
	 .peer:checked ~ div svg.empty {
		@apply hidden;
	}
</style>
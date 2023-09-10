<script lang="ts">
    export let categories: {name: string;count:number}[];
</script>
<div class="max-w-[16.75rem]">
    <p class="s4 text-c-1-a mb-[1rem]">Categories</p>

    <div class="flex flex-col gap-[.75rem]">
        {#each categories as category}
            <div class="flex justify-between items-start  w-full h-[1.1875rem]">
                <p class="body text-c-1-a px-[.5px]">{category.name}</p>
                <div class="flex justify-center items-center rounded-[.75rem] bg-c-2-e px-[.5rem]">
                    <p class="s6 text-c-2-b">{category.count}</p>
                </div>
            </div>
        {/each}
    </div>
</div>
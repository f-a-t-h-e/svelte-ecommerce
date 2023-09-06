<script lang="ts">
    import {page} from "$app/stores";
	import HeaderFiltres from "./HeaderFiltres.svelte";
</script>

<div class="py-[1rem] px-[2.8125rem] bg-c-1-j flex">
    <p class="caption text-c-1-c"><a href="/">Homepage</a></p>
    <span class="caption mx-[.5rem] text-c-1-d">/</span>
    <p class="caption text-c-1-a">{$page.params.category}</p>
</div>
<main class="mx-auto max-w-[78.75rem]">
    <!-- HEADING -->
    <div class="flex justify-between py-[.5rem] px-[2.8125rem] bg-c-1-j items-center">
        <h1 class="s1">{$page.params.category}</h1>
        <div class="flex gap-[1.5rem]">
            <label class="flex gap-[0.25rem]">
                <input class="peer" type="radio" name="layout-display" hidden checked>
                <div class="stroke-c-1-c peer-checked:stroke-c-2-a flex w-[1rem] h-[1rem] justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.33301 8H14.6663" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 1.33331V14.6666" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                </div>
                <p class="caption text-c-1-a">Grid view</p>
            </label>
            <label class="flex gap-[0.25rem]">
                <input class="peer" type="radio" name="layout-display" hidden >
                <div class="stroke-c-1-c peer-checked:stroke-c-2-a flex w-[1rem] h-[1rem] justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.33301 4.66663H14.6663" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.33301 8H14.6663" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.33301 11.3333H14.6663" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                </div>
                <p class="caption text-c-1-c">List view</p>
            </label>
            <div class="flex gap-[0.25rem]">
                <div class="h-full flex justify-center items-center bg-c-2-e px-[.5rem] rounded-[.75rem]">
                    <!-- dynamic -->
                    <p class="s6 text-c-2-a px-[1px]">117</p>
                </div>
                <p class="caption text-c-1-c">Products</p>
            </div>
        </div>
    </div>
    <!-- filtres -->
    <HeaderFiltres />
</main>
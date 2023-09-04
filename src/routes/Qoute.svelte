<script lang="ts">
    export let name:string = "Name and Surname";
</script>
<div class="">
    <!-- @todo fix the border color -->
	<div class="rounded-[0.75rem] border border-[#F1F1F1] h-[12.375rem] w-[23.0625rem]
    pt-[1.5rem] flex flex-col items-center gap-[1.5rem]">
        <p class="s5 max-w-[19.0625rem] text-c-1-a text-center">
            “ <slot /> “
        </p>
        <p class="s6 text-c-1-c text-center">
            {name}
        </p>
    </div>
    <div class="w-[1.5rem] h-[1.5rem] fill-c-1-f -translate-y-1/2 mx-auto relative">
        <div class="w-[200%] h-[200%] absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                <circle cx="24" cy="24.5" r="24" fill="#F5F5F5"/>
              </svg>
        </div>
    </div>
</div>
<!-- h-[13.875rem] -->
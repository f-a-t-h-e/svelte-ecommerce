<script>
	import sec from '$lib/assets/bg/sec.png';
</script>

<div
	class="relative flex h-[17.5rem] w-[26.1875rem]
			flex-col rounded-[0.75rem] pb-[2rem] pl-[2.0625rem]
			pt-[3rem]
			"
>
	<img
		src={sec}
		alt="section-background"
		class="rounded-[0.75rem] absolute bottom-0 left-0 right-0 top-0"
		width="419"
		height="280"
	/>
	<div class="flex h-[17.5rem] w-[26.1875rem]
	flex-col rounded-[0.75rem] pb-[2rem] pl-[2.0625rem]
	pt-[3rem] absolute top-0">
		<div class="inline-flex flex-col items-start gap-[.5rem]">
			<p class="s6 text-c-2-b">Banner subfocus</p>
			<h3 class="s3 text-c-1-a">Space for heading</h3>
		</div>
		<a
			href="/"
			class="button
					mt-auto flex h-[3rem]
					w-fit items-center gap-[0.375rem]
					whitespace-nowrap rounded-[0.75rem] border-2 border-c-2-c
					bg-c-1-f px-[1rem] text-c-1-a
					"
			><span>Read recepies</span><span class="flex h-[1rem] w-[1rem] items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="7" height="9" viewBox="0 0 7 9" fill="none">
					<path
						d="M2.0332 7.68669L4.7732 4.94669C4.89737 4.82178 4.96706 4.65281 4.96706 4.47669C4.96706 4.30056 4.89737 4.13159 4.7732 4.00669L2.10654 1.34002"
						stroke="#6A983C"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="bevel"
					/>
				</svg>
			</span></a
		>
	</div>
</div>

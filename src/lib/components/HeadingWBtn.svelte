<!-- heading -->
<div class="flex w-full items-center justify-between">
	<p class="s4 text-c-1-a"><slot>Section Headline</slot></p>
	<button class="flex items-center gap-[.375rem] p-[.375rem_.75rem]">
		<p class="button text-c-1-a"><slot name="btn-txt">Button</slot></p>
		<span class="flex h-[1rem] w-[1rem] items-center justify-center">
			<slot name="svg">
				<svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
					<path
						d="M1.5332 7.68663L4.2732 4.94663C4.39737 4.82172 4.46706 4.65276 4.46706 4.47663C4.46706 4.30051 4.39737 4.13154 4.2732 4.00663L1.60654 1.33997"
						stroke="#6A983C"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="bevel"
					/>
				</svg>
			</slot>
		</span>
	</button>
</div>

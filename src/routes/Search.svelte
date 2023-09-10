<div class="h-[2.625rem] w-[31.25rem]">
	<div class="flex h-full w-full rounded-[0.75rem] border border-c-1-d bg-c-1-h">
		<button class="default" aria-label="pick a category">
			<p>
				<span class="mr-2">All categories</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
				>
					<path
						d="M1.81323 1.53333L4.55323 4.27332C4.67814 4.39749 4.84711 4.46719 5.02323 4.46719C5.19936 4.46719 5.36832 4.39749 5.49323 4.27332L8.1599 1.60666"
						stroke="#6A983C"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="bevel"
					/>
				</svg>
			</p>
		</button>
		<input class="grow" type="text" placeholder="Search Products, categories ..." />
		<button class="search" aria-label="search">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="14"
				viewBox="0 0 14 14"
				fill="none"
			>
				<path
					d="M8.19401 10.4333C10.7713 10.4333 12.8607 8.34394 12.8607 5.76661C12.8607 3.18928 10.7713 1.09995 8.19401 1.09995C5.61668 1.09995 3.52734 3.18928 3.52734 5.76661C3.52734 8.34394 5.61668 10.4333 8.19401 10.4333Z"
					stroke="#151515"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="bevel"
				/>
				<path
					d="M4.81417 9.24002L1.6875 12.3667"
					stroke="#151515"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="bevel"
				/>
			</svg>
		</button>
	</div>
</div>

<style lang="postcss">
	button.default {
		@apply flex h-full w-[10rem] flex-col justify-center pl-[1rem];
		color: var(--c-1-a, #151515);
		/* Button/Default */
		font-family: Poppins;
		font-size: 0.9375rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	button.default > p {
		@apply flex w-full items-center border-r;
	}
	input {
		@apply px-[1.5rem] placeholder:text-c-1-c;
		font-family: Open Sans;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.search {
		@apply flex w-[2.75rem] h-full items-center justify-center;
	}
	.search svg {
		width: 0.69831rem;
		height: 0.70419rem;
	}
</style>

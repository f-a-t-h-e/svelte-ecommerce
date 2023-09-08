<script lang="ts">
	const billingInputs = [
		{ name: 'first-name', title: 'First name', placeH: 'First name' },
		{ name: 'last-name', title: 'Last name', placeH: 'Last name' },
		{ name: 'email', title: 'Email address', placeH: 'Email address' },
		{ name: 'phone', title: 'Phone number', placeH: 'Phone number' },
		{ name: 'address', title: 'Address', placeH: 'Address' },
		{ name: 'city', title: 'Town / City', placeH: 'Town or city' },
		{ name: 'country', title: 'State / Country', placeH: 'Choose a state or Country' },
		{ name: 'zip', title: 'ZIP/Postal code', placeH: 'Postal code or ZIP' }
	];
    
</script>

<div class="flex bg-c-1-j px-[2.8125rem] py-[1rem]">
	<p class="caption text-c-1-c"><a href="/">Homepage</a></p>
	<span class="caption mx-[.5rem] text-c-1-d">/</span>
	<p class="caption text-c-1-a">{'Checkout page'}</p>
</div>
<main class="px-[2.8125rem] py-[1rem]">
	<div class="flex w-full gap-[2rem]">
		<!-- left section / checkout iputs -->
		<div class="flex flex-col gap-[4rem]">
			<!-- billing info -->
			<section class="flex w-full flex-col gap-[2rem]">
				<header class="w-full">
					<h3 class="s3 mb-[.25rem] text-c-1-a">Billing info</h3>
					<div class="flex w-full justify-between gap-[1rem]">
						<p class="caption text-c-1-c">Please enter your billing info</p>
						<p class="caption text-c-1-c">Step 1 of 5</p>
					</div>
				</header>
				<!-- inputs -->
				<div
					class="flex w-[41.875rem] flex-wrap gap-[2rem]
                [&>label]:relative [&>label]:min-w-[calc(50%-1rem)]"
				>
					{#each billingInputs as billingInput}
						<label class="flex flex-col">
							<p class="s6 text-c-1-a">{billingInput.title}</p>
							<input
								type="text"
								name={billingInput.name}
								placeholder={billingInput.placeH}
								style={billingInput.name === 'country' ? 'padding-right: 3rem' : ''}
							/>
							{#if billingInput.name === 'country'}
								<span
									class="absolute bottom-[.81rem] right-[1rem] flex h-[1rem] w-[1rem] cursor-pointer items-center
                                justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="8"
										height="12"
										viewBox="0 0 8 12"
										fill="none"
									>
										<path
											d="M7.18651 3.79997L4.44651 1.05997C4.3216 0.935799 4.15263 0.866104 3.97651 0.866104C3.80039 0.866104 3.63142 0.935799 3.50651 1.05997L0.839844 3.72663"
											stroke="#151515"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="bevel"
										/>
										<path
											d="M0.8125 8.20003L3.5525 10.94C3.67741 11.0642 3.84638 11.1339 4.0225 11.1339C4.19862 11.1339 4.36759 11.0642 4.4925 10.94L7.15917 8.27336"
											stroke="#151515"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="bevel"
										/>
									</svg>
								</span>
							{/if}
						</label>
					{/each}
				</div>
				<!-- option -->
				<label class="flex items-center w-fit cursor-pointer select-none gap-[.5rem] px-[1rem] py-[0.5625rem] rounded-[.75rem] border-[1px] border-c-1-d bg-c-1-h">
					<input class="peer" type="checkbox" />
					<span class="svg h-[1.5rem] w-[1.5rem]">
						<svg
							class="empty"
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
						>
							<path
								d="M19 1.00003H3C1.89543 1.00003 1 1.89546 1 3.00003V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V3.00003C21 1.89546 20.1046 1.00003 19 1.00003Z"
								stroke="#D1D1D1"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="bevel"
							/>
						</svg>
						<svg
							class="filled"
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
						>
							<path
								d="M19 1.00003H3C1.89543 1.00003 1 1.89546 1 3.00003V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V3.00003C21 1.89546 20.1046 1.00003 19 1.00003Z"
								fill="#6A983C"
								stroke="#46760A"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="bevel"
							/>
							<path
								d="M5.55957 11.85L8.61957 14.91L16.4396 7.09003"
								stroke="#FDFDFD"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
					<span class="body">Ship to a different address?</span>
				</label>
			</section>

			<!-- billing method -->
			<section class="flex w-full flex-col gap-[2rem]">
				<header class="w-full">
					<h3 class="s3 mb-[.25rem] text-c-1-a">Billing method</h3>
					<div class="flex w-full justify-between gap-[1rem]">
						<p class="caption text-c-1-c">Please enter your payment method</p>
						<p class="caption text-c-1-c">Step 2 of 5</p>
					</div>
				</header>
				<div class="flex w-full flex-col gap-[1rem]">
					<label
						class="flex h-fit w-full cursor-pointer select-none
                    items-center justify-between gap-1 rounded-[.75rem] border-[1px] border-c-1-d bg-c-1-h px-[1rem] py-[.75rem]"
					>
						<input class="peer" name="billing-method" type="radio" hidden />
						<div class="flex items-center gap-[1rem]">
							<span class="flex h-[1.5rem] w-[1.5rem] items-center justify-center">
								<svg
									class="empty"
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
								>
									<path
										d="M10.8105 20.8701C16.3334 20.8701 20.8105 16.3929 20.8105 10.8701C20.8105 5.34721 16.3334 0.870056 10.8105 0.870056C5.2877 0.870056 0.810547 5.34721 0.810547 10.8701C0.810547 16.3929 5.2877 20.8701 10.8105 20.8701Z"
										fill="white"
										stroke="#D1D1D1"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="bevel"
									/>
								</svg>
								<svg
									class="filled"
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
								>
									<path
										d="M10.8105 20.8701C16.3334 20.8701 20.8105 16.3929 20.8105 10.8701C20.8105 5.34721 16.3334 0.870056 10.8105 0.870056C5.2877 0.870056 0.810547 5.34721 0.810547 10.8701C0.810547 16.3929 5.2877 20.8701 10.8105 20.8701Z"
										fill="#6A983C"
										stroke="#6A983C"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="bevel"
									/>
									<path
										d="M11 16.0001C13.7614 16.0001 16 13.7615 16 11.0001C16 8.23864 13.7614 6.00006 11 6.00006C8.23858 6.00006 6 8.23864 6 11.0001C6 13.7615 8.23858 16.0001 11 16.0001Z"
										fill="white"
									/>
								</svg>
							</span>
							<span class="s6 text-c-1-a">FedEx</span>
						</div>
						<div class="flex items-center gap-[.25rem]">
							<span class="s6 select-text text-c-2-a">+32 USD</span>
							<span class="s6 rounded-[.75rem] bg-c-1-f px-[.5rem] text-c-1-a"
								>Additional price</span
							>
						</div>
						<div class="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="54"
								height="16"
								viewBox="0 0 54 16"
								fill="none"
							>
								<path
									d="M44.9625 5.6377L47.1961 8.01844L49.3464 5.6377H53.9381L49.4507 10.5181L53.9996 15.4385H49.2226L47.0101 13.0389L44.8177 15.4385H40.2051L44.7142 10.5385L40.2051 5.6377H44.9625Z"
									fill="#F85604"
								/>
								<path
									d="M40.2077 5.63776V8.94918H35.1008V11.9878H40.2077V15.4385H31.3477V0H40.2077V3.44127H35.1008V5.63776H40.2077Z"
									fill="#F85604"
								/>
								<path
									d="M27.6092 0V6.31818H27.568C26.74 5.39838 25.7064 5.07848 24.5071 5.07848C22.05 5.07848 20.199 6.69466 19.5494 8.83021C18.8077 6.47704 16.8966 5.03423 14.063 5.03423C11.7619 5.03423 9.9446 6.0331 8.99657 7.66088V5.63776H4.2399V3.44127H9.43084V0H0V15.4385H4.2399V8.94918H8.4663C8.3403 9.42576 8.27279 9.93644 8.27279 10.4754C8.27279 13.6954 10.8169 15.9558 14.063 15.9558C16.7931 15.9558 18.5924 14.7161 19.5434 12.4565H15.9096C15.4183 13.1361 15.0455 13.3371 14.063 13.3371C12.9237 13.3371 11.9412 12.3759 11.9412 11.2363H19.3402C19.6612 13.7941 21.7215 16 24.5484 16C25.7679 16 26.8847 15.4197 27.5672 14.4404H27.6085V15.44H31.3459V0H27.6092ZM12.0597 8.99488C12.2952 8.01415 13.082 7.37362 14.0638 7.37362C15.1445 7.37362 15.8908 7.99456 16.0873 8.99488C16.1698 8.99488 12.0597 8.99488 12.0597 8.99488ZM25.3404 13.0883C23.9626 13.0883 23.1061 11.8464 23.1061 10.5501C23.1061 9.16462 23.8509 7.83207 25.3404 7.83207C26.8847 7.83207 27.4997 9.16462 27.4997 10.5501C27.4997 11.8638 26.848 13.0883 25.3404 13.0883Z"
									fill="#2B017B"
								/>
							</svg>
						</div>
					</label>

					<label
						class="flex h-fit w-full cursor-pointer select-none
                    items-center justify-between gap-1 rounded-[.75rem] border-[1px] border-c-1-d bg-c-1-h px-[1rem] py-[.75rem]"
					>
						<input class="peer" name="billing-method" type="radio" hidden />
						<div class="flex items-center gap-[1rem]">
							<span class="flex h-[1.5rem] w-[1.5rem] items-center justify-center">
								<svg
									class="empty"
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
								>
									<path
										d="M10.8105 20.8701C16.3334 20.8701 20.8105 16.3929 20.8105 10.8701C20.8105 5.34721 16.3334 0.870056 10.8105 0.870056C5.2877 0.870056 0.810547 5.34721 0.810547 10.8701C0.810547 16.3929 5.2877 20.8701 10.8105 20.8701Z"
										fill="white"
										stroke="#D1D1D1"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="bevel"
									/>
								</svg>
								<svg
									class="filled"
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
								>
									<path
										d="M10.8105 20.8701C16.3334 20.8701 20.8105 16.3929 20.8105 10.8701C20.8105 5.34721 16.3334 0.870056 10.8105 0.870056C5.2877 0.870056 0.810547 5.34721 0.810547 10.8701C0.810547 16.3929 5.2877 20.8701 10.8105 20.8701Z"
										fill="#6A983C"
										stroke="#6A983C"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="bevel"
									/>
									<path
										d="M11 16.0001C13.7614 16.0001 16 13.7615 16 11.0001C16 8.23864 13.7614 6.00006 11 6.00006C8.23858 6.00006 6 8.23864 6 11.0001C6 13.7615 8.23858 16.0001 11 16.0001Z"
										fill="white"
									/>
								</svg>
							</span>
							<span class="s6 text-c-1-a">DHL</span>
						</div>
						<div class="flex items-center gap-[.25rem]">
							<span class="s6 select-text text-c-2-a">+15 USD</span>
							<span class="s6 rounded-[.75rem] bg-c-1-f px-[.5rem] text-c-1-a"
								>Additional price</span
							>
						</div>
						<div class="">
							<svg
								class="fill-[#D50029]"
								xmlns="http://www.w3.org/2000/svg"
								width="93"
								height="14"
								viewBox="0 0 93 14"
								fill="none"
							>
								<path
									d="M29.9852 5.20536C29.5788 5.79118 28.8989 6.80961 28.485 7.40444C28.275 7.70693 27.8956 8.25613 29.1534 8.25613C30.4842 8.25613 35.7759 8.25613 35.7759 8.25613C35.7759 8.25613 36.8432 6.71047 37.7381 5.41772C38.9551 3.65913 37.8434 0 33.492 0C29.5974 0 16.3555 0 16.3555 0L13.3842 4.29734C13.3842 4.29734 28.7877 4.29734 29.5783 4.29734C30.3959 4.29734 30.3848 4.62855 29.9852 5.20536ZM25.1201 9.31625C23.8622 9.31625 24.2417 8.76591 24.4517 8.46343C24.8655 7.86859 25.5566 6.86087 25.963 6.27505C26.3631 5.69824 26.3737 5.36702 25.555 5.36702C24.765 5.36702 18.1488 5.36702 18.1488 5.36702L12.1814 14C12.1814 14 22.8394 14 26.734 14C31.5405 14 34.2165 10.52 35.0414 9.31681C35.0414 9.31625 26.4504 9.31625 25.1201 9.31625ZM34.5869 14H43.1239L46.3603 9.31568L37.8243 9.31681C37.8217 9.31625 34.5869 14 34.5869 14ZM56.6134 0L53.3389 4.73445H49.5289L52.8018 0H44.2674L38.5577 8.25613H59.4387L65.1468 0H56.6134ZM46.9339 14H55.4678L58.7058 9.31681H50.1719C50.1687 9.31625 46.9339 14 46.9339 14ZM0 11.1638V12.1586H11.8893L12.5762 11.1638H0ZM13.8541 9.31625H0V10.3099H13.1657L13.8541 9.31625ZM0 14H10.6156L11.2993 13.0109H0V14ZM80.4715 12.158H93V11.1633H81.1594L80.4715 12.158ZM79.1988 14H93V13.0109H79.882L79.1988 14ZM82.4352 9.31625L81.7489 10.311H93V9.31625H82.4352ZM71.2571 8.25613L76.9662 0H67.9276C67.9244 0 62.2141 8.25613 62.2141 8.25613H71.2571ZM61.4823 9.31625C61.4823 9.31625 60.8584 10.2237 60.5552 10.6608C59.4836 12.202 60.4314 14 63.9292 14C67.9699 14 77.6351 14 77.6351 14L80.8731 9.31681H61.4823V9.31625Z"
									fill="#D50029"
								/>
							</svg>
						</div>
					</label>
				</div>
			</section>

			<!-- payment method -->
			<section class="flex w-full flex-col gap-[2rem]">
				<header class="w-full">
					<h3 class="s3 mb-[.25rem] text-c-1-a">Payment method</h3>
					<div class="flex w-full justify-between gap-[1rem]">
						<p class="caption text-c-1-c">Please enter your payment method</p>
						<p class="caption text-c-1-c">Step 3 of 5</p>
					</div>
				</header>

				<div class="flex w-full flex-col gap-[1rem]">
					<!-- visa -->
					<div class="w-full">
						<input
							class="peer"
							type="radio"
							name="payment-method"
							id="payment-method-visa"
							hidden
						/>
						<div
							class="flex w-full flex-col gap-0 rounded-[.75rem] border-[1px]
                    border-c-1-d bg-c-1-j px-[1rem] py-[.75rem] transition-all duration-200
                    peer-checked:gap-[2rem]
                    peer-checked:py-[1rem] peer-checked:[&>div]:max-h-[5rem]
                    "
						>
							<label
								for="payment-method-visa"
								class="flex h-fit w-full cursor-pointer select-none items-center justify-between gap-1"
							>
								<div class="flex items-center gap-[1rem]">
									<span class="flex h-[1.5rem] w-[1.5rem] items-center justify-center">
										<svg
											class="empty"
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
										>
											<path
												d="M10.8105 20.8701C16.3334 20.8701 20.8105 16.3929 20.8105 10.8701C20.8105 5.34721 16.3334 0.870056 10.8105 0.870056C5.2877 0.870056 0.810547 5.34721 0.810547 10.8701C0.810547 16.3929 5.2877 20.8701 10.8105 20.8701Z"
												fill="white"
												stroke="#D1D1D1"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="bevel"
											/>
										</svg>
										<svg
											class="filled"
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
										>
											<path
												d="M10.8105 20.8701C16.3334 20.8701 20.8105 16.3929 20.8105 10.8701C20.8105 5.34721 16.3334 0.870056 10.8105 0.870056C5.2877 0.870056 0.810547 5.34721 0.810547 10.8701C0.810547 16.3929 5.2877 20.8701 10.8105 20.8701Z"
												fill="#6A983C"
												stroke="#6A983C"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="bevel"
											/>
											<path
												d="M11 16.0001C13.7614 16.0001 16 13.7615 16 11.0001C16 8.23864 13.7614 6.00006 11 6.00006C8.23858 6.00006 6 8.23864 6 11.0001C6 13.7615 8.23858 16.0001 11 16.0001Z"
												fill="white"
											/>
										</svg>
									</span>
									<span class="s6 text-c-1-a">Credit card</span>
								</div>
								<div class="flex items-center gap-[.75rem]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="49"
										height="16"
										viewBox="0 0 49 16"
										fill="none"
									>
										<g clip-path="url(#clip0_17395_37652)">
											<path
												d="M21.233 15.7692H17.2637L19.7464 0.280762H23.7155L21.233 15.7692Z"
												fill="#00579F"
											/>
											<path
												d="M35.6218 0.659404C34.8389 0.346018 33.5971 0 32.0616 0C28.1417 0 25.3814 2.10895 25.3645 5.12412C25.3319 7.3487 27.3408 8.58429 28.8433 9.32604C30.379 10.084 30.901 10.5787 30.901 11.2543C30.8854 12.2919 29.6601 12.7702 28.5173 12.7702C26.9325 12.7702 26.0834 12.5236 24.793 11.9464L24.2703 11.6989L23.7148 15.1757C24.6458 15.6036 26.361 15.9834 28.1417 16C32.3067 16 35.0181 13.9237 35.0503 10.7105C35.0661 8.94739 34.0053 7.59639 31.7184 6.49242C30.3301 5.78374 29.4799 5.30589 29.4799 4.58079C29.4962 3.9216 30.199 3.24643 31.7662 3.24643C33.0566 3.21336 34.0047 3.52631 34.7229 3.83948L35.082 4.00394L35.6218 0.659404Z"
												fill="#00579F"
											/>
											<path
												d="M40.899 10.2822C41.2259 9.3924 42.4838 5.94865 42.4838 5.94865C42.4673 5.98172 42.81 5.04244 43.006 4.46582L43.2834 5.80039C43.2834 5.80039 44.0351 9.50781 44.1983 10.2822C43.578 10.2822 41.683 10.2822 40.899 10.2822ZM45.7987 0.280762H42.7284C41.7816 0.280762 41.0623 0.560641 40.6538 1.56584L34.7578 15.769H38.9227C38.9227 15.769 39.6084 13.8573 39.7558 13.4456C40.2127 13.4456 44.2643 13.4456 44.8521 13.4456C44.9661 13.9894 45.3257 15.769 45.3257 15.769H49.0009L45.7987 0.280762Z"
												fill="#00579F"
											/>
											<path
												d="M13.9484 0.280762L10.0611 10.8424L9.63632 8.70036C8.91764 6.22875 6.66371 3.5434 4.14844 2.20816L7.70906 15.7528H11.9065L18.1457 0.280762H13.9484Z"
												fill="#00579F"
											/>
											<path
												d="M6.45162 0.280762H0.0653342L0 0.59371C4.9817 1.87901 8.28099 4.97718 9.63651 8.70102L8.24821 1.58271C8.01965 0.593491 7.31725 0.313392 6.45162 0.280762Z"
												fill="#F4A622"
											/>
										</g>
										<defs>
											<clipPath id="clip0_17395_37652">
												<rect width="49" height="16" fill="white" />
											</clipPath>
										</defs>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="33"
										height="20"
										viewBox="0 0 33 20"
										fill="none"
									>
										<path d="M20.9616 2.13892H12.0391V17.8611H20.9616V2.13892Z" fill="#FF5F00" />
										<path
											d="M12.6049 10C12.6049 6.80556 14.1345 3.97222 16.4855 2.13889C14.7576 0.805556 12.5766 0 10.1972 0C4.56042 0 0 4.47222 0 10C0 15.5278 4.56042 20 10.1972 20C12.5766 20 14.7576 19.1944 16.4855 17.8611C14.1345 16.0556 12.6049 13.1944 12.6049 10Z"
											fill="#EB001B"
										/>
										<path
											d="M32.9992 10C32.9992 15.5278 28.4388 20 22.802 20C20.4226 20 18.2415 19.1944 16.5137 17.8611C18.893 16.0278 20.3943 13.1944 20.3943 10C20.3943 6.80556 18.8647 3.97222 16.5137 2.13889C18.2415 0.805556 20.4226 0 22.802 0C28.4388 0 32.9992 4.5 32.9992 10Z"
											fill="#F79E1B"
										/>
									</svg>
								</div>
							</label>

							<div class="h-fit flex max-h-0 w-full overflow-hidden transition-all duration-200">
								<label class="flex w-full flex-col">
									<span class="s6 text-c-1-a">Card number</span>
									<input type="text" name="card-number" placeholder="Card number" />
								</label>
							</div>

							<div class="h-fit flex max-h-0 w-full gap-[2rem] overflow-hidden transition-all duration-200">
								<label class="flex grow flex-col">
									<span class="s6 text-c-1-a">Card holder</span>
									<input type="text" name="card-number" placeholder="Card holder" />
								</label>
								<div class="flex gap-[1rem]">
									<label class="flex w-[7.5rem] flex-col">
										<span class="s6 text-c-1-a">Expiration date</span>
										<input type="text" name="card-number" placeholder="DD/MM/YY" />
									</label>
									<label class="flex w-[7.5rem] flex-col">
										<span class="s6 text-c-1-a">CVC</span>
										<input type="text" name="card-number" placeholder="CVC" />
									</label>
								</div>
							</div>
						</div>
					</div>

					<!-- paypal -->
					<div class="w-full">
						<input
							class="peer"
							type="radio"
							name="payment-method"
							id="payment-method-paypal"
							hidden
						/>
						<div
							class="flex w-full flex-col gap-0 rounded-[.75rem] border-[1px]
                    border-c-1-d bg-c-1-j px-[1rem] py-[.75rem] transition-all duration-200
                    peer-checked:gap-[2rem]
                    peer-checked:py-[1rem] peer-checked:[&>div]:max-h-[5rem]
                    "
						>
							<label
								for="payment-method-paypal"
								class="flex h-fit w-full cursor-pointer select-none items-center justify-between gap-1"
							>
								<div class="flex items-center gap-[1rem]">
									<span class="flex h-[1.5rem] w-[1.5rem] items-center justify-center">
										<svg
											class="empty"
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
										>
											<path
												d="M10.8105 20.8701C16.3334 20.8701 20.8105 16.3929 20.8105 10.8701C20.8105 5.34721 16.3334 0.870056 10.8105 0.870056C5.2877 0.870056 0.810547 5.34721 0.810547 10.8701C0.810547 16.3929 5.2877 20.8701 10.8105 20.8701Z"
												fill="white"
												stroke="#D1D1D1"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="bevel"
											/>
										</svg>
										<svg
											class="filled"
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
										>
											<path
												d="M10.8105 20.8701C16.3334 20.8701 20.8105 16.3929 20.8105 10.8701C20.8105 5.34721 16.3334 0.870056 10.8105 0.870056C5.2877 0.870056 0.810547 5.34721 0.810547 10.8701C0.810547 16.3929 5.2877 20.8701 10.8105 20.8701Z"
												fill="#6A983C"
												stroke="#6A983C"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="bevel"
											/>
											<path
												d="M11 16.0001C13.7614 16.0001 16 13.7615 16 11.0001C16 8.23864 13.7614 6.00006 11 6.00006C8.23858 6.00006 6 8.23864 6 11.0001C6 13.7615 8.23858 16.0001 11 16.0001Z"
												fill="white"
											/>
										</svg>
									</span>
									<span class="s6 text-c-1-a">PayPal</span>
								</div>
								<div class="flex items-center gap-[.75rem]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="76" height="19" viewBox="0 0 76 19" fill="none">
                                        <path d="M28.4156 4.09027H24.2102C24.071 4.09018 23.9363 4.13911 23.8304 4.22822C23.7246 4.31734 23.6545 4.44079 23.6328 4.57633L21.9319 15.2048C21.9241 15.2541 21.9272 15.3045 21.9411 15.3526C21.9549 15.4006 21.9792 15.4451 22.0121 15.483C22.0451 15.5209 22.086 15.5513 22.132 15.5721C22.178 15.5929 22.2281 15.6037 22.2788 15.6036H24.2865C24.4258 15.6037 24.5605 15.5547 24.6664 15.4654C24.7723 15.3762 24.8423 15.2526 24.8639 15.1169L25.3226 12.2503C25.3441 12.1147 25.4141 11.9912 25.5198 11.902C25.6256 11.8128 25.7602 11.7637 25.8994 11.7636H27.2307C30.0009 11.7636 31.5997 10.4424 32.0172 7.82421C32.2054 6.67876 32.0252 5.77876 31.481 5.14845C30.8833 4.45633 29.8232 4.09027 28.4156 4.09027ZM28.9008 7.97209C28.6708 9.45936 27.5179 9.45936 26.403 9.45936H25.7684L26.2136 6.68179C26.2267 6.60052 26.2687 6.52652 26.3321 6.47308C26.3956 6.41964 26.4763 6.39027 26.5598 6.39027H26.8507C27.6101 6.39027 28.3265 6.39027 28.6967 6.81694C28.9174 7.07148 28.9851 7.44967 28.9008 7.97209ZM40.9864 7.92421H38.9726C38.8891 7.92421 38.8084 7.95357 38.7449 8.00701C38.6814 8.06046 38.6394 8.13446 38.6264 8.21573L38.5372 8.77088L38.3964 8.56967C37.9604 7.94603 36.9882 7.73754 36.0179 7.73754C33.7925 7.73754 31.8918 9.39876 31.5216 11.7291C31.3291 12.8915 31.6028 14.003 32.2718 14.7782C32.8855 15.4909 33.7636 15.7878 34.8083 15.7878C36.6015 15.7878 37.5958 14.6515 37.5958 14.6515L37.506 15.203C37.498 15.2523 37.5009 15.3027 37.5146 15.3508C37.5283 15.3989 37.5524 15.4435 37.5852 15.4815C37.6181 15.5195 37.6589 15.5501 37.7049 15.5711C37.7509 15.592 37.8009 15.6029 37.8516 15.603H39.6656C39.8049 15.6031 39.9397 15.5541 40.0455 15.4648C40.1514 15.3756 40.2215 15.252 40.243 15.1163L41.3314 8.323C41.3394 8.2738 41.3365 8.22347 41.3229 8.17549C41.3092 8.12752 41.2851 8.08303 41.2523 8.04511C41.2195 8.00719 41.1788 7.97675 41.1329 7.95587C41.087 7.935 41.037 7.9242 40.9864 7.92421ZM38.1793 11.7872C37.985 12.9212 37.0719 13.6824 35.9072 13.6824C35.3224 13.6824 34.8551 13.4975 34.555 13.1472C34.2574 12.7994 34.1442 12.3042 34.2389 11.7527C34.4203 10.6285 35.3489 9.84239 36.4957 9.84239C37.0676 9.84239 37.5324 10.0297 37.8387 10.383C38.1455 10.74 38.2673 11.2381 38.1793 11.7872ZM51.7119 7.92421H49.6882C49.5927 7.92436 49.4988 7.94746 49.4144 7.9915C49.3301 8.03554 49.2579 8.09919 49.2042 8.17694L46.4131 12.2291L45.23 8.33512C45.1937 8.21636 45.1195 8.11227 45.0185 8.03827C44.9175 7.96426 44.795 7.92427 44.6692 7.92421H42.6805C42.6247 7.92406 42.5697 7.93706 42.52 7.96212C42.4703 7.98718 42.4274 8.02357 42.3948 8.06827C42.3623 8.11298 42.3411 8.16469 42.3329 8.21912C42.3247 8.27355 42.3299 8.32911 42.3479 8.38118L44.577 14.8285L42.4813 17.7442C42.4441 17.7959 42.422 17.8567 42.4175 17.92C42.4129 17.9832 42.4262 18.0465 42.4557 18.1028C42.4852 18.1591 42.5299 18.2063 42.5849 18.2393C42.6398 18.2723 42.7029 18.2897 42.7673 18.2897H44.7885C44.8829 18.2898 44.9759 18.2674 45.0595 18.2243C45.1431 18.1812 45.2149 18.1188 45.2687 18.0424L51.9997 8.46663C52.0361 8.41483 52.0575 8.35417 52.0615 8.29123C52.0655 8.22829 52.052 8.16547 52.0223 8.10959C51.9927 8.05371 51.9481 8.00689 51.8933 7.97421C51.8386 7.94153 51.7759 7.92424 51.7119 7.92421Z" fill="#022273"/>
                                        <path d="M58.4118 4.09027H54.2058C54.0667 4.09032 53.9321 4.13931 53.8264 4.22842C53.7207 4.31752 53.6507 4.44089 53.629 4.57633L51.9281 15.2048C51.9202 15.254 51.9232 15.3044 51.937 15.3524C51.9507 15.4003 51.9748 15.4448 52.0077 15.4827C52.0405 15.5206 52.0813 15.5511 52.1272 15.5719C52.1732 15.5928 52.2231 15.6036 52.2737 15.6036H54.4321C54.5295 15.6035 54.6236 15.5691 54.6975 15.5066C54.7715 15.4442 54.8204 15.3578 54.8355 15.263L55.3182 12.2503C55.3397 12.1147 55.4097 11.9912 55.5154 11.902C55.6212 11.8128 55.7558 11.7637 55.895 11.7636H57.2257C59.9965 11.7636 61.5947 10.4424 62.0128 7.82421C62.2016 6.67875 62.0202 5.77875 61.476 5.14845C60.8789 4.45633 59.8194 4.09027 58.4118 4.09027ZM58.897 7.97208C58.6677 9.45936 57.5147 9.45936 56.3992 9.45936H55.7652L56.2111 6.68178C56.2238 6.60052 56.2657 6.52645 56.3291 6.47298C56.3925 6.4195 56.4732 6.39016 56.5566 6.39027H56.8475C57.6063 6.39027 58.3233 6.39027 58.6935 6.81693C58.9142 7.07148 58.9813 7.44966 58.897 7.97208ZM70.982 7.92421H68.9694C68.8859 7.92398 68.8051 7.95328 68.7417 8.00677C68.6783 8.06026 68.6365 8.1344 68.6238 8.21572L68.5347 8.77087L68.3932 8.56966C67.9572 7.94602 66.9857 7.73754 66.0153 7.73754C63.7899 7.73754 61.8898 9.39875 61.5196 11.7291C61.3278 12.8915 61.6002 14.003 62.2692 14.7781C62.8842 15.4909 63.761 15.7878 64.8058 15.7878C66.5989 15.7878 67.5932 14.6515 67.5932 14.6515L67.5034 15.203C67.4954 15.2524 67.4984 15.3029 67.5121 15.3511C67.5259 15.3993 67.5501 15.4439 67.5831 15.482C67.6161 15.52 67.657 15.5505 67.7032 15.5714C67.7493 15.5923 67.7995 15.6031 67.8503 15.603H69.6636C69.8029 15.6029 69.9375 15.5538 70.0432 15.4646C70.149 15.3754 70.2189 15.2519 70.2404 15.1163L71.3295 8.32299C71.3372 8.27364 71.334 8.22322 71.3201 8.17521C71.3061 8.12719 71.2818 8.08271 71.2488 8.04482C71.2158 8.00694 71.1749 7.97654 71.1288 7.95572C71.0828 7.9349 71.0327 7.92415 70.982 7.92421ZM68.1749 11.7872C67.9818 12.9212 67.0675 13.6824 65.9028 13.6824C65.3192 13.6824 64.8507 13.4975 64.5506 13.1472C64.253 12.7994 64.1411 12.3042 64.2345 11.7527C64.4172 10.6284 65.3444 9.84239 66.4913 9.84239C67.0631 9.84239 67.528 10.0297 67.8343 10.383C68.1423 10.74 68.2641 11.2381 68.1749 11.7872ZM73.3562 4.38178L71.6302 15.2048C71.6222 15.254 71.6253 15.3044 71.639 15.3524C71.6527 15.4003 71.6768 15.4448 71.7097 15.4827C71.7425 15.5206 71.7833 15.5511 71.8293 15.5719C71.8752 15.5928 71.9252 15.6036 71.9757 15.6036H73.7111C73.9994 15.6036 74.2442 15.3975 74.2885 15.1169L75.9906 4.48905C75.9985 4.43979 75.9954 4.38942 75.9817 4.34142C75.968 4.29341 75.9439 4.2489 75.911 4.21095C75.8782 4.173 75.8374 4.14251 75.7915 4.12157C75.7456 4.10064 75.6956 4.08975 75.645 4.08966H73.7018C73.6184 4.08995 73.5378 4.11951 73.4745 4.17304C73.4112 4.22656 73.3692 4.30056 73.3562 4.38178Z" fill="#167FC4"/>
                                        <path d="M4.46792 17.6691L4.78952 15.6558L4.07314 15.6394H0.652344L3.02962 0.783032C3.0367 0.737639 3.06009 0.696265 3.09553 0.66645C3.13098 0.636635 3.17611 0.620366 3.22271 0.620608H8.99065C10.9055 0.620608 12.227 1.01334 12.9169 1.78849C13.2404 2.15212 13.4464 2.53212 13.546 2.95031C13.6505 3.38909 13.6524 3.91334 13.5503 4.55273L13.5429 4.5994V5.00909L13.8663 5.1897C14.1133 5.313 14.3352 5.47978 14.5212 5.68182C14.7979 5.99273 14.9769 6.38788 15.0525 6.85637C15.1306 7.33818 15.1048 7.91152 14.9769 8.56061C14.8293 9.30728 14.5907 9.95758 14.2685 10.4897C13.9842 10.9664 13.602 11.3793 13.1463 11.7018C12.7183 12.0012 12.2098 12.2285 11.6348 12.3739C11.0777 12.517 10.4425 12.5891 9.74577 12.5891H9.29688C8.97589 12.5891 8.66413 12.703 8.41939 12.9073C8.175 13.1137 8.01288 13.3989 7.96189 13.7121L7.92807 13.8933L7.35988 17.4418L7.33406 17.5721C7.32729 17.6133 7.31561 17.6339 7.29839 17.6479C7.28171 17.6613 7.2609 17.6688 7.23936 17.6691H4.46792Z" fill="#022273"/>
                                        <path d="M14.174 4.64667C14.1567 4.75515 14.1371 4.86606 14.1149 4.98C13.3543 8.82909 10.7519 10.1588 7.4283 10.1588H5.73604C5.32958 10.1588 4.98707 10.4497 4.92373 10.8448L4.05731 16.2606L3.81196 17.7958C3.80218 17.8567 3.80592 17.9189 3.8229 17.9782C3.83988 18.0376 3.8697 18.0926 3.91032 18.1395C3.95093 18.1864 4.00138 18.224 4.05818 18.2498C4.11497 18.2757 4.17677 18.2891 4.23933 18.2891H7.24075C7.59617 18.2891 7.8981 18.0345 7.95405 17.6891L7.98357 17.5388L8.54868 14.0042L8.58496 13.8103C8.6403 13.4636 8.94284 13.2091 9.29827 13.2091H9.74716C12.6551 13.2091 14.9315 12.0455 15.5969 8.67818C15.8748 7.27152 15.7309 6.09697 14.9955 5.27091C14.7624 5.01537 14.484 4.80384 14.174 4.64667Z" fill="#167FC4"/>
                                        <path d="M13.3764 4.33394C13.1335 4.2647 12.8865 4.21065 12.6367 4.17212C12.1431 4.09736 11.6442 4.06149 11.1449 4.06485H6.62397C6.45192 4.06472 6.2855 4.12526 6.15479 4.23552C6.02408 4.34579 5.9377 4.4985 5.91128 4.66606L4.94955 10.6697L4.92188 10.8449C4.95184 10.6537 5.05021 10.4795 5.1992 10.3537C5.3482 10.2278 5.53797 10.1587 5.73418 10.1588H7.42644C10.7501 10.1588 13.3524 8.82849 14.1131 4.98C14.1358 4.86606 14.1549 4.75516 14.1721 4.64667C13.9714 4.54293 13.7622 4.45596 13.5467 4.38667C13.4902 4.3682 13.4335 4.35062 13.3764 4.33394Z" fill="#022273"/>
                                        <path d="M5.91178 4.66606C5.93798 4.49845 6.02431 4.34567 6.15508 4.23546C6.28586 4.12525 6.45241 4.06493 6.62447 4.06545H11.1454C11.681 4.06545 12.1809 4.1 12.6372 4.17273C12.9459 4.22055 13.2504 4.29208 13.5478 4.38667C13.7723 4.46 13.9808 4.54667 14.1732 4.64667C14.3995 3.22424 14.1714 2.25576 13.391 1.37879C12.5308 0.413333 10.9781 0 8.99129 0H3.22335C2.81751 0 2.47131 0.290909 2.40858 0.686667L0.00609367 15.6958C-0.00509672 15.7654 -0.000839159 15.8367 0.0185735 15.9046C0.0379862 15.9725 0.0720932 16.0355 0.118548 16.0891C0.165004 16.1428 0.222705 16.1859 0.287682 16.2155C0.35266 16.2451 0.423372 16.2605 0.494955 16.2606H4.05595L4.95005 10.6697L5.91178 4.66606Z" fill="#022273"/>
                                      </svg>
								</div>
							</label>

							<div class="h-fit flex max-h-0 w-full overflow-hidden transition-all duration-200">
								<label class="flex w-full flex-col">
									<span class="s6 text-c-1-a">Account email</span>
									<input type="text" name="card-number" placeholder="Account email" />
								</label>
							</div>

							<div class="h-fit flex max-h-0 w-full gap-[2rem] overflow-hidden transition-all duration-200">
								<label class="flex grow flex-col">
									<span class="s6 text-c-1-a">Account name</span>
									<input type="text" name="card-number" placeholder="Account name" />
								</label>
								<div class="flex gap-[1rem]">
									<label class="flex w-[7.5rem] flex-col">
										<span class="s6 text-c-1-a">Expiration date</span>
										<input type="text" name="card-number" placeholder="DD/MM/YY" />
									</label>
									<label class="flex w-[7.5rem] flex-col">
										<span class="s6 text-c-1-a">CVC</span>
										<input type="text" name="card-number" placeholder="CVC" />
									</label>
								</div>
							</div>
						</div>
				</div>
			</section>

            <!-- additional informations -->
            <section class="flex w-full flex-col gap-[2rem]">
                <header class="w-full">
					<h3 class="s3 mb-[.25rem] text-c-1-a">Additional informations</h3>
					<div class="flex w-full justify-between gap-[1rem]">
						<p class="caption text-c-1-c">Need something else? We will make it for you!</p>
						<p class="caption text-c-1-c">Step 4 of 5</p>
					</div>
				</header>
                <div class="">
                    <label class="w-full flex flex-col">
                        <span class="s6 text-c-1-a">Order notes</span>
                        <div role="textbox" class="overflow-hidden w-full h-fit rounded-[.75rem] border-[1px] border-solid border-c-1-d">
                            <textarea wrap="soft" class="body block w-full bg-c-1-h px-[1.3125rem] py-[.71875rem] text-c-1-a placeholder:text-c-1-c" name="order-notes" cols="10" rows="5" placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..." />
                        </div>
                    </label>
                </div>
            </section>

            <!-- confirmation -->
            <section class="flex w-full flex-col gap-[2rem]">
                <header class="w-full">
					<h3 class="s3 mb-[.25rem] text-c-1-a">Confirmation</h3>
					<div class="flex w-full justify-between gap-[1rem]">
						<p class="caption text-c-1-c">We are getting to the end. Just few clicks and your order si ready!</p>
						<p class="caption text-c-1-c">Step 5 of 5</p>
					</div>
				</header>

                <!-- check -->
                <div class="flex flex-col gap-[1rem] w-full">
                    <label class="flex items-center cursor-pointer select-none gap-[.5rem] px-[1rem] py-[0.5625rem] rounded-[.75rem] border-[1px] border-c-1-d bg-c-1-h">
                        <input class="peer" type="checkbox" />
                        <span class="svg h-[1.5rem] w-[1.5rem]">
                            <svg
                                class="empty"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <path
                                    d="M19 1.00003H3C1.89543 1.00003 1 1.89546 1 3.00003V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V3.00003C21 1.89546 20.1046 1.00003 19 1.00003Z"
                                    stroke="#D1D1D1"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="bevel"
                                />
                            </svg>
                            <svg
                                class="filled"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <path
                                    d="M19 1.00003H3C1.89543 1.00003 1 1.89546 1 3.00003V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V3.00003C21 1.89546 20.1046 1.00003 19 1.00003Z"
                                    fill="#6A983C"
                                    stroke="#46760A"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="bevel"
                                />
                                <path
                                    d="M5.55957 11.85L8.61957 14.91L16.4396 7.09003"
                                    stroke="#FDFDFD"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <span class="body">I agree with sending an Marketing and newsletter emails. No spam, promissed!</span>
                    </label>
                    <label class="flex items-center cursor-pointer select-none gap-[.5rem] px-[1rem] py-[0.5625rem] rounded-[.75rem] border-[1px] border-c-1-d bg-c-1-h">
                        <input class="peer" type="checkbox" />
                        <span class="svg h-[1.5rem] w-[1.5rem]">
                            <svg
                                class="empty"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <path
                                    d="M19 1.00003H3C1.89543 1.00003 1 1.89546 1 3.00003V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V3.00003C21 1.89546 20.1046 1.00003 19 1.00003Z"
                                    stroke="#D1D1D1"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="bevel"
                                />
                            </svg>
                            <svg
                                class="filled"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <path
                                    d="M19 1.00003H3C1.89543 1.00003 1 1.89546 1 3.00003V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V3.00003C21 1.89546 20.1046 1.00003 19 1.00003Z"
                                    fill="#6A983C"
                                    stroke="#46760A"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="bevel"
                                />
                                <path
                                    d="M5.55957 11.85L8.61957 14.91L16.4396 7.09003"
                                    stroke="#FDFDFD"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <span class="body">I agree with our terms and conditions and privacy policy.</span>
                    </label>
                </div>

                <!-- complete -->
                <div class="">
                    <button class="btn-filled px-[3rem] py-[.75rem]">
                        <span>Complete order</span>
                    </button>
                </div>

                <!-- trust -->
                <div class="flex flex-col gap-[.5rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 30 32" fill="none">
                        <path d="M24.053 5.96007C23.1585 6.01119 22.2612 5.93941 21.3863 5.74674C20.3309 5.38534 19.3438 4.84897 18.4663 4.16007C17.7156 3.62793 17.0028 3.0443 16.333 2.41341C16.049 2.14815 15.6749 2.00061 15.2863 2.00061C14.8977 2.00061 14.5236 2.14815 14.2396 2.41341C13.5876 3.02435 12.9021 3.59857 12.1863 4.13341C11.3034 4.83136 10.3126 5.38079 9.25295 5.76007C8.25634 5.98526 7.23255 6.06608 6.21295 6.00007C5.37809 5.9655 4.54574 5.88538 3.71962 5.76007C3.51775 5.73015 3.31191 5.74118 3.1144 5.79251C2.91688 5.84384 2.73172 5.93442 2.56996 6.05885C2.40821 6.18328 2.27316 6.33901 2.17288 6.51675C2.0726 6.6945 2.00914 6.89061 1.98629 7.09341C1.91962 7.73341 1.74629 9.40007 1.66629 11.2534C1.55417 13.1051 1.67061 14.9635 2.01295 16.7867C2.97834 19.8074 4.75388 22.5053 7.14629 24.5867C9.04787 26.3804 11.1098 27.9961 13.3063 29.4134C13.8949 29.8176 14.5922 30.0339 15.3063 30.0339C16.0203 30.0339 16.7176 29.8176 17.3063 29.4134C19.3863 27.9591 21.3318 26.3215 23.1196 24.5201C25.372 22.4234 27.04 19.7766 27.9596 16.8401" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.666 14.6667L17.4793 18.48C17.5031 18.5059 17.5319 18.5265 17.5641 18.5406C17.5962 18.5548 17.6309 18.5621 17.666 18.5621C17.7011 18.5621 17.7358 18.5548 17.768 18.5406C17.8001 18.5265 17.829 18.5059 17.8527 18.48L28.3327 8" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    <div class="">
                        <span class="s6 text-c-1-a">All your data are safe</span>
                        <p class="caption text-c-1-c max-w-[13.3125rem]">We are using the most advanced security to provide you the best experience ever.</p>
                    </div>
                </div>
            </section>
		</div>


        <!-- right section / order summary -->
	</div>
</main>

<style lang="postcss">
	input[type='text'] {
		@apply w-full rounded-[.75rem] border-[1px] border-solid border-c-1-d
        bg-c-1-h px-[1.3125rem] py-[.71875rem] text-c-1-a placeholder:text-c-1-c;
		/* .body */
		font-family: Open Sans;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	label svg.filled {
		@apply hidden;
	}
	.peer:checked ~ span svg.filled,
	.peer:checked ~ div svg.filled,
	.peer:checked ~ svg.filled {
		@apply block;
	}
	.peer:checked ~ span svg.empty,
	.peer:checked ~ div svg.empty,
	.peer:checked ~ svg.empty {
		@apply hidden;
	}
</style>

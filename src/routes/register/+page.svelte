<script>
	export let data;
</script>

<div class="flex mb-10">
	<div
		class="hero min-h-[50vh]"
		style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
	>
		<div class="hero-overlay bg-opacity-60" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-xl">
				<h1 class="mb-5 text-5xl font-bold">You are invited!</h1>
				<p class="mb-5">
					Ratchadaporn Pimrat and Sirakorn Lamyai would like to cordially invite you to our wedding
					party, which will happen on <span class="font-bold">YYYY-MM-DD</span>
				</p>
			</div>
		</div>
	</div>
</div>

<div class="flex justify-center">
	<div class="basis-full max-w-4xl">
		<h1 class="font-display text-2xl tracking-wide mb-3">Join us in our celebration</h1>

		<p class="mb-3">
			As our commitment to (1) accomodate everyone to their best, and (2) be green and save the
			planet (by reducing food and other materials waste), we would like to hear from you about your
			requests.
		</p>

		<div class="card bg-base-200 shadow-xl">
			<div class="card-body">
				<form method="post">
					<div class="form-control mb-10">
						<div style="display: none">
							<input name="screen_name" value={data.screen_name} />
							<input name="invitation_code" value={data.invitation_code} />
						</div>
						<label class="label">
							<span class="label-text">How many will be there (including you)?</span>
						</label>
						<input name="n_guests" placeholder="Type here" class="input input-bordered w-full" />
						<label class="label">
							<span class="label-text"
								>Any dietary restrictions/food allergies? (We may not be able to accomodate all
								scenarios, but we will try our best!)</span
							>
						</label>
						<input type="text" placeholder="Type here" class="input input-bordered w-full" />
					</div>
					<input type="submit" class="btn btn-primary" value="Count me in!" />
				</form>
			</div>
		</div>
	</div>
</div>

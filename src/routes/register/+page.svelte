<script>
	export let data;
</script>

<h1 class="font-display text-4xl tracking-wide">Register / ลงทะเบียน</h1>

<p>Hi, {data.friendly_name}!</p>

<p>Lorem Ipsum Dolar</p>

<form method="post">
	<div class="form-control">
		<label class="label">
			You are
			<input name="screen_name" class="input input-bordered max-w-xs" value={data.screen_name} />
		</label>
		<label class="label">
			How many guests?
			<input name="n_guests" class="input input-bordered max-w-xs" value={data.screen_name} />
		</label>
		<label class="label">
			<span class="label-text">What is your name?</span>
			<input type="text" placeholder="Type here" class="input input-bordered max-w-xs" />
		</label>
	</div>
</form>

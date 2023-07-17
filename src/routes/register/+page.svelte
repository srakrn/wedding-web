<script>
	export let data;
</script>

<h1>Register</h1>

<p>Hi, {data.friendly_name}!</p>

<p>Lorem Ipsum Dolar</p>

<form method="post">
	<label
		>You are
		<input name="screen_name" value={data.screen_name} />
	</label>
	<label
		>How many guests?
		<input name="n_guests" />
	</label>
	<input type="submit" />
</form>

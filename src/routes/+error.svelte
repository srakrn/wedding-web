<script>
	import { page } from '$app/stores';
</script>

<div class="grid h-screen place-items-center">
	<span class="text-center">
		<div class="text-9xl">{$page.status} :(</div>
		<div>Perhaps what you are looking for is not here.</div>
	</span>
</div>

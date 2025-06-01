<script lang="ts">
	import type { PageProps } from './$types';

	const { form }: PageProps = $props();
</script>

<form method="POST" action="?/login">
	{#if form?.error}<p class="error">{form?.message}</p>{/if}
	<label>
		Username
		<input name="username" type="text" value={form?.username ?? ''} />
	</label>
	<label>
		Email
		<input name="email" type="email" value={form?.email ?? ''} />
	</label>
	<label>
		Password
		<input name="password" type="password" value={form?.password ?? ''} />
	</label>
	<button class="button">Log In</button>
</form>

<script lang="ts">
	import type { PageProps } from './$types';

	const { form }: PageProps = $props();
</script>

<form method="POST" action="?/signup">
	{#if form?.inviteWrong}<p class="error">Invite Code Not Found</p>{/if}
	<label>
		Invite Code
		<input name="invite" type="text" value={form?.invite ?? ''} />
	</label>
	<label>
		Username
		<input name="username" type="text" value={form?.username ?? ''} />
	</label>
	<label>
		Email
		<input name="email" type="email" value={form?.email ?? ''} />
	</label>
	{#if form?.passwordMismatch}<p class="error">Passwords Do Not Match</p>{/if}
	<label>
		Password
		<input name="password" type="password" value={form?.password ?? ''} />
	</label>
	<label>
		Confirm Password
		<input name="password-check" type="password" value={form?.passwordCheck ?? ''} />
	</label>
	<button>Complete Sign Up</button>
</form>

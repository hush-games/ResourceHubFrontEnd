<script lang="ts">
	let { data, role } = $props();
	let { supabase } = $derived(data);
	import { invalidate } from '$app/navigation';

	const logout = async () => {
		await supabase.auth.signOut();
		invalidate('supabase:auth');
	};
</script>

<nav data-sveltekit-reload>
	<a href="/dashboard">Dashboard</a>
	<a href="/groups">Groups</a>
	<a href="/">Resources</a>
	<a href="/myaccount">My Account</a>
	{#if role === 'admin'}<a href="/admin">Admin Tools</a>{/if}
	<a href="/" onclick={logout}>Logout</a>
</nav>

<script lang="ts">
	import '../app.css';

	import AdminNav from '$lib/AdminNav.svelte';
	import UserNav from '$lib/UserNav.svelte';

	let { children } = $props();
	const role: string = 'user';
</script>

{#if role === 'admin'}
	<AdminNav />
{:else if role === 'user'}
	<UserNav />
{/if}

{@render children()}

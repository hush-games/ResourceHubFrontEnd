<script lang="ts">
	import '../app.css';

	let { children } = $props();
	const role = 'admin';
</script>

{#if role === 'admin'}
	<h1>Admin Panel</h1>
{:else if role === 'user'}
	<h1>Admin User</h1>
{/if}

{@render children()}

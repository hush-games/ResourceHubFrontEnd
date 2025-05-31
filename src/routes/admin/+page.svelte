<script lang="ts">
	let { data } = $props();
	let { profile } = $derived(data);
</script>

{#if profile.role === 'admin'}
	<h1>Admin Dashboard</h1>
	<a href="/admin/announcements">Announcement Manager</a>
	<a href="/admin/users">User Manager</a>
	<a href="/admin/resources">Resource Manager</a>
	<a href="/admin/support">Support Tools</a>
{:else}
	<h1>Access Denied</h1>
	<p>You do not have permission to access the admin dashboard.</p>
{/if}

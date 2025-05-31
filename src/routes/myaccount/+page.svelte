<script lang="ts">
	let { data } = $props();
	let { profile } = $derived(data);
</script>

<p>Details and such</p>
<p>Role: {profile.role}</p>
<a href="/myaccount/edit">Edit</a>
<a href="/">Back</a>

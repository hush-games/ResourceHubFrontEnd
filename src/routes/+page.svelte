<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.message}</h1>
<a href="/myresources">My Saved Resources</a>
<h1>Search for Resouces</h1>
<br />
<a href="/resources/resouceone">Resouce One</a>
<a href="/resources/resoucetwo">Resouce Two</a>
<br />
<a href="/myaccount">My Account</a>
<a href="/dashboard">Dashboard</a>
<a href="/groups">Groups</a>

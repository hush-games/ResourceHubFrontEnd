<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { profile } = $derived(data);
</script>

{#if profile}<a href="/myresources">My Saved Resources</a>{/if}
<h1>Search for Resouces</h1>
<br />
<a href="/resources/resouceone">Resouce One</a>
<a href="/resources/resoucetwo">Resouce Two</a>
<br />

<script>
	import { page } from "$app/state";

</script>
{#if page.status === 404}
	<p>404</p>
{/if}
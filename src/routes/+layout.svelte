<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<p>{Math.random()}</p>
<main>{@render children()}</main>

<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<p>layout route random {Math.random()}</p>
<main>{@render children()}</main>

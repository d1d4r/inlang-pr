<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<p>main page route random {data.random}</p>
<p>main page date {new Date()}</p>

<p>sport</p>

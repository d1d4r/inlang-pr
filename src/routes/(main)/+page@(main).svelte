<script lang="ts">
	import { m } from '../../paraglide/messages';
	import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

</script>

<p>main page route random {data.random}</p>

<p>{m.greeting()}</p>

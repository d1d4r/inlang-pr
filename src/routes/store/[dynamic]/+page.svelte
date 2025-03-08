<script>
	import { page } from '$app/state';
	import { getLocale } from '../../../paraglide/runtime';
</script>

<p>{getLocale()}</p>
<p>dynamic store {page.params.dynamic}</p>

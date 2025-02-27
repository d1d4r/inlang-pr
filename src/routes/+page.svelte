<script lang="ts">
	import { m } from '../paraglide/messages';
	import { setLocale } from '../paraglide/runtime';
</script>

<button class="border-x px-2 py-1" onclick={() => setLocale('ckb')}>ckb</button>
<button class="border-x px-2 py-1" onclick={() => setLocale('ar')}>ar</button>
<button class="border-x px-2 py-1" onclick={() => setLocale('en')}>en</button>

<p>{m.greeting()}</p>

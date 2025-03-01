<script lang="ts">
	import { m } from '../paraglide/messages';
	import { localizeHref, setLocale } from '../paraglide/runtime';
</script>

<button class="border-x px-2 py-1" onclick={() => setLocale('ckb')}>ckb</button>
<button class="border-x px-2 py-1" onclick={() => setLocale('ar')}>ar</button>
<button class="border-x px-2 py-1" onclick={() => setLocale('en')}>en</button>
<br/>
<a class="border-x px-2 py-1" href={localizeHref('/about')}>about</a>
<a class="border-x px-2 py-1" href={localizeHref('/policy')}>policy</a>
<a class="border-x px-2 py-1" href={localizeHref('/123')}>postId</a>
<p>{m.greeting()}</p> 

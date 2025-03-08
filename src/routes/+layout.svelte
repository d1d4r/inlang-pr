<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { getLocale, localizeHref, setLocale } from '../paraglide/runtime';
</script>

<main>
	<div class="space-y-4">
		<!-- <a class="mt-5 border px-2 py-1" href="/kurdish" data-sveltekit-reload>ckb</a>
		<a class="mt-5 border px-2 py-1" href="/arabic" data-sveltekit-reload>ar</a>
		<a class="mt-5 border px-2 py-1" href="/english" data-sveltekit-reload>en</a> -->
		<!-- <span>href</span>
		<br />
		<span>button</span> -->
		<button class="border px-2 py-1" onclick={() => setLocale('ckb')}>ckb</button>
		<button class="border px-2 py-1" onclick={() => setLocale('ar')}>ar</button>
		<button class="border px-2 py-1" onclick={() => setLocale('en')}>en</button>
		<br />
		<br />
		<a class="border px-2 py-1" href={localizeHref('/')}>home</a>
		<a class="border px-2 py-1" href={localizeHref('/about')}>about</a>
		<a class="border px-2 py-1" href={localizeHref('/term')}>term</a>
		<a class="border px-2 py-1" href={localizeHref('/policy')}>policy</a>
		<a class="border px-2 py-1" href={localizeHref('/123')}>dynamic</a>
		<a class="border px-2 py-1" href={localizeHref('/store')}>store</a>
	</div>
	<p>{getLocale()}</p>
	{@render children()}
</main>

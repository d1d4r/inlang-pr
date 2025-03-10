import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/paraglide',
			strategy: ['url', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/about',
					localized: [
						['ckb', '/kurdish/darbara'],
						['en', '/english/about'],
						['ar', '/arabic/darbara']
					]
				},
				{
					pattern: '/policy',
					localized: [
						['ckb', '/kurdish/syasat'],
						['en', '/english/policy'],
						['ar', '/arabic/syasat']
					]
				},
				{
					pattern: '/specific-route',
					localized: [
						['ckb', '/kurdish/specific-route'],
						['en', '/english'], // No need to translate
						['ar', '/arabic'] // No need to translate
					]
				},
				// Wildcard fallback for other paths
				{
					pattern: '/:path(.*)?',
					localized: [
						['ckb', '/kurdish/:path(.*)?'],
						['en', '/english/:path(.*)?'],
						['ar', '/arabic/:path(.*)?']
					]
				}
			]
		}),
		sveltekit(),
		tailwindcss()
	]
});

// .
// └── routes
//     ├── [postId] // //no need path transaltion
//     │   ├── +page.svelte
//     │   └── +page.ts
//     ├── some-page // path transalted and optional path
//     │   ├── +page.svelte
//     │   └── +page.ts
//     ├── another-page //no need path transaltion
//     │   ├── +page.svelte
//     │   └── +page.ts
//     ├── +page.svelte
//     ├── +page.ts
//     └── +layout.svelte

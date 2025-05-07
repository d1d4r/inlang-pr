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
			disableAsyncLocalStorage: true,
			urlPatterns: [
				{
					pattern: '/404',
					localized: [
						['ckb', '/kurdish/404'],
						['en', '/english/404'],
						['ar', '/arabic/404'],
						['en', '/english/specific-route'],
						['ar', '/arabic/specific-route']
					]
				},
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
						['en', '/english/404'], // No need to translate
						['ar', '/arabic/404'] // No need to translate
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

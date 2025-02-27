import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [paraglideVitePlugin({
		project: './project.inlang',
		outdir: './src/paraglide',
		strategy: ['url', 'baseLocale'],
		urlPatterns: [

			{
				pattern: ":protocol://:domain(.*)::port?/:locale(kurdish|english|arabic)?/:about?/:path(.*)?",
				deLocalizedNamedGroups: {
					locale: null,
					about: 'about'
				},
				localizedNamedGroups: {
					en: {
						locale: 'english',
						about: "about"
					},
					ckb: {
						locale: 'kurdish',
						about: "darbara"
					},
					ar: {
						locale: 'arabic',
						about: null
					}
				},
			},
		]
	}
	), sveltekit(), tailwindcss()]
});

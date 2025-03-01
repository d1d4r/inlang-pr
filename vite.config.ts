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
					'locale': null,
					'about?': 'about'
				},
				localizedNamedGroups: {
					ckb: {
						'locale': 'kurdish',
						'about?': 'darbara'
					},
					en: {
						'locale': 'english',
						'about?': 'about'
					},
					ar: {
						'locale': 'arabic',
						about: null
					}
				},
			},
			{
                pattern: ":protocol://:domain(.*)::port?/:locale(kurdish|english|arabic)?/:policy?/:path(.*)?",
                deLocalizedNamedGroups: {
                    'locale': null,
                    'policy?': 'policy',
                },
                localizedNamedGroups: {
                    ckb: {
                        'locale': 'kurdish',
                        'policy?': 'syasat',
                    },
                    en: {
                        'locale': 'english',
                        'policy?': 'about',
                    },
                    ar: {
                        'locale': 'arabic',
                        'policy?': 'syasat'
                    }
                },
            },
		]
	}
	), sveltekit(), tailwindcss()]
});

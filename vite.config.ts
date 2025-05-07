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
						['kr', '/kurmanci/404'],
						['kr', '/kurmanci/sports'],
						['kr', '/kurmanci/subject/business/:path(.*)?'],
						['kr', '/kurmanci/subject/sports/:path(.*)?'],
						['kr', '/kurmanci/subject/science-tech/:path(.*)?'],
						['kr', '/kurmanci/subject/culture/:path(.*)?'],
						['kr', '/kurmanci/subject/health/:path(.*)?'],
						['en', '/english/404'],
						['en', '/english/subject/business/:path(.*)?'],
						['en', '/english/subject/sports/:path(.*)?'],
						['en', '/english/subject/science-tech/:path(.*)?'],
						['en', '/english/subject/culture/:path(.*)?'],
						['en', '/english/subject/health/:path(.*)?'],
						['ar', '/arabic/404'],
						['ar', '/kurmanci/subject/business/:path(.*)?'],
						['ar', '/arabic/subject/sports/:path(.*)?'],
						['ar', '/arabic/subject/science-tech/:path(.*)?'],
						['ar', '/arabic/subject/culture/:path(.*)?'],
						['ar', '/arabic/subject/health/:path(.*)?'],
						['fa', '/persian/404'],
						['fa', '/persian/science-tech'],
						['fa', '/persian/subject/business/:path(.*)?'],
						['fa', '/persian/subject/sports/:path(.*)?'],
						['fa', '/persian/subject/science-tech/:path(.*)?'],
						['fa', '/persian/subject/culture/:path(.*)?'],
						['fa', '/persian/subject/health/:path(.*)?'],
						['tr', '/turkce/404'],
						['tr', '/turkce/sports'],
						['tr', '/turkce/environment'],
						['tr', '/turkce/in-photo'],
						['tr', '/turkce/subject/business/:path(.*)?'],
						['tr', '/turkce/subject/sports/:path(.*)?'],
						['tr', '/turkce/subject/science-tech/:path(.*)?'],
						['tr', '/turkce/subject/culture/:path(.*)?'],
						['tr', '/turkce/subject/health/:path(.*)?']
					]
				},

				{
					pattern: '/:path(.*)?',
					localized: [
						['ckb', '/kurdish/:path(.*)?'],
						['en', '/english/:path(.*)?'],
						['ar', '/arabic/:path(.*)?'],
						['fa', '/persian/:path(.*)?'],
						['tr', '/turkce/:path(.*)?'],
						['kr', '/kurmanci/:path(.*)?']
					]
				}
			]
		}),
		sveltekit(),
		tailwindcss()
	]
});

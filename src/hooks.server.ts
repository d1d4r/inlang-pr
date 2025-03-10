import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from './paraglide/server';
import { getLocale } from './paraglide/runtime';

export const handle: Handle = ({ event, resolve }) => {
	return paraglideMiddleware(
		event.request,
		({ request, locale }) => {
			console.log('====================================');
			console.log('hooks.server.ts locale', locale);
			console.log('hooks.server.ts getLocale()', getLocale());
			return resolve(
				{ ...event, request },
				{
					transformPageChunk: ({ html }) => {
						const localeInfo = new Intl.Locale(locale);
						return html
							.replace('%lang%', locale)
							.replace('%direction%', localeInfo.textInfo?.direction);
					}
				}
			);
		},
		{ disableAsyncLocalStorage: true }
	);
};

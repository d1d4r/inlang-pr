import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from './paraglide/server';
import { sequence } from '@sveltejs/kit/hooks';

// creating a handle to use the paraglide middleware
const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				const localeInfo = new Intl.Locale(locale);
				return (
					html
						.replace('%lang%', locale)
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						.replace('%dir%', localeInfo.textInfo?.direction)
				);
			}
		});
	});

const preloadHandle: Handle = async ({ event, resolve }) => {
	return await resolve(event, {
		preload: ({ type }) => type === 'js' || type === 'css'
	});
};

export const handle: Handle = sequence(preloadHandle,paraglideHandle);

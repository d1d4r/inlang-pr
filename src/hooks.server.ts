import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from './paraglide/server';

export const handle: Handle = ({ event, resolve }) => {
    return paraglideMiddleware(event.request, ({ request, locale }) =>
        resolve(
            { ...event, request },
            {
                transformPageChunk: ({ html }) => {
                    const localeInfo = new Intl.Locale(locale)
                    return html
                        .replace('%lang%', locale)
                        .replace('%direction%', localeInfo.textInfo?.direction)

                }
            }
        ),
        { disableAsyncLocalStorage: true }

    );
};
import type { PageLoad } from './$types';
export const prerender = true;
export const load = (async () => {
    return {
        random: Math.random()
    };
}) satisfies PageLoad;

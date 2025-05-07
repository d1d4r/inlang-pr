import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		random: Math.random()
	};
}) satisfies PageLoad;

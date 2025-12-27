
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	isr: {
		expiration: 60,
		bypassToken: 'didar',
	}
};
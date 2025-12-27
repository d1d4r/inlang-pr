/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'nodejs', // Required for ISR
	isr: {
		expiration: false,
		bypassToken: 'didardidardidardidardidardidardidar'
	}
};

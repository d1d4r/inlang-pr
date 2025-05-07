const PRIVCYPOLICYABOUT = {
	about8: 'about8',
	terms: 'terms',
	privacy: 'privacy'
};

const valitadionRoute = <T extends Record<string, string>>(route: T, params: string) => {
	return Object.hasOwn(route, params);
};

export function match(params) {
	return valitadionRoute(PRIVCYPOLICYABOUT, params);
}

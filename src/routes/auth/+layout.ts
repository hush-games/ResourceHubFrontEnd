import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		skipRootLayout: true
	};
};

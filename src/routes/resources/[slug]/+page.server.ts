import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		post: {
			resourceName: params.slug
		}
	};
};

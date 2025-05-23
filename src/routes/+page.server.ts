import type { PageServerLoad } from './$types';
import * as dotenv from 'dotenv';
dotenv.config();

export const load: PageServerLoad = async () => {
	const response = await fetch(`${process.env.BACKEND_URL}`);
	const data = await response.json();
	console.log('DATA @server:', data);

	if (data) {
		return data;
	}
};

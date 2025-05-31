import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const username = formData.get('username') as string;
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		console.log('Login form data:', { username, email, password });

		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			return fail(400, { username, email, password, error: true, message: error.message });
		} else {
			redirect(303, '/dashboard');
		}
	}
};

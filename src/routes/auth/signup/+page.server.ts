import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const invite = formData.get('invite') as string;
		const username = formData.get('username') as string;
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const passwordCheck = formData.get('password-check') as string;

		console.log('Signup form data:', { invite, username, email, password, passwordCheck });

		if (invite !== '11') {
			return fail(400, { username, email, password, passwordCheck, inviteWrong: true });
		}

		if (password !== passwordCheck) {
			return fail(400, { invite, username, email, passwordMismatch: true });
		}

		const { error } = await supabase.auth.signUp({ email, password });

		if (error) {
			console.error('Signup error:', error);
			redirect(303, '/auth/error');
		} else {
			redirect(303, '/dashboard');
		}
	}
};

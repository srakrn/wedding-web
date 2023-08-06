import { error, fail } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function load({ params, url, route }) {
    const screenName = url.searchParams.get('screen_name');
    const invitationCode = url.searchParams.get('invitation_code');

    if (!screenName || !invitationCode) {
        throw error(403);
    }

    const sqlResponse = await supabase.from("guests").select().eq('screen_name', screenName).eq('invitation_code', invitationCode)

    if (sqlResponse.error) {
        throw error(500);
    }

    if (sqlResponse.data.length == 0) {
        throw error(403);
    }

    return sqlResponse.data[0]
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const screenName = data.get('screen_name');
        let error = [];

        if (error.length) {
            return fail(422, {
                n_guests: data.get('n_guests'),
                dietary: data.get('dietary'),
                error: error
            });
        }
        else {
            const supabase_response = await supabase
                .from('registrations')
                .insert({ by: screenName, rsvp: data.get('rsvp'), restrictions: data.get('restrictions') })
            console.log(supabase_response);
        }
    }
}
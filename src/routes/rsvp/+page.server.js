import { error, fail } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import { background_image_name } from '$lib/helpers/background.server';

export async function load({ params, url, route }) {
    const screenName = url.searchParams.get('screen_name');
    const invitationCode = url.searchParams.get('invitation_code');

    if (!screenName || !invitationCode) {
        throw error(404);
    }

    const guestInfoSqlResponse = await supabase.from("guests").select().eq('screen_name', screenName).eq('invitation_code', invitationCode)
    const guestRegistSqlResponse = await supabase.from("registrations").select().eq('by', screenName).order('created_at', { ascending: false }).limit(1)

    if (guestInfoSqlResponse.error || guestRegistSqlResponse.error) {
        console.log(guestInfoSqlResponse.error);
        console.log(guestRegistSqlResponse.error);
        throw error(500);
    }

    if (guestInfoSqlResponse.data.length == 0) {
        throw error(404);
    }

    const guest = guestInfoSqlResponse.data[0]
    const guestRsvp = guestRegistSqlResponse.data[0]

    return {
        screen_name: guest.screen_name,
        friendly_name: guest.friendly_name,
        invitation_code: guest.invitation_code,
        rsvp: guestRsvp?.rsvp,
        restrictions: guestRsvp?.restrictions,
        background_image_name: background_image_name
    }
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const screenName = data.get('screen_name');
        let error = [];

        if (error.length) {
            return fail(422, {
                error: error
            });
        }
        else {
            const supabase_response = await supabase
                .from('registrations')
                .insert({ by: screenName, rsvp: data.get('rsvp'), restrictions: data.get('restrictions') })
            console.log(supabase_response);
        }
        return { success: true }
    }
}
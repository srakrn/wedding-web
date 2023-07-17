import { error } from '@sveltejs/kit';

export function load({ params, url, route }) {
    const friendly_name = url.searchParams.get('friendly_name');
    const invitation_code = url.searchParams.get('invitation_code');

    if (!friendly_name || !invitation_code) {
        throw error(403);
    }
    return {
        "friendly_name": friendly_name,
        "invitation_code": invitation_code
    };
}

import { supabase } from '$lib/supabaseClient';

import CredentialsProvider from "@auth/core/providers/credentials";
import { SvelteKitAuth } from "@auth/sveltekit";

export const handle = SvelteKitAuth({
    providers: [
        CredentialsProvider({
            name: "invitationCode",
            credentials: {
                screenName: { label: "Screen name", type: "text" },
                invitationCode: { label: "Invitation code" }
            },
            // TODO: Fix type
            async authorize(credentials, request) {
                const guestInfoSqlResponse = await supabase.from("guests")
                    .select()
                    .eq('screen_name', credentials.screenName)
                    .eq('invitation_code', credentials.invitationCode)

                if (guestInfoSqlResponse.error) {
                    console.log(guestInfoSqlResponse.error);
                    return null;
                }

                const guest = guestInfoSqlResponse.data[0];

                return {
                    screen_name: guest.screen_name,
                    friendly_name: guest.friendly_name,
                    invitation_code: guest.invitation_code,
                }
            },
        }),
    ],
});
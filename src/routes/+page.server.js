import { background_image_name } from '$lib/helpers/background.server';

export async function load({ params, url, route }) {
    return {
        background_image_name: background_image_name
    }
}
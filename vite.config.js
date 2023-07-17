import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		hmr: {
			overlay: true
		}
	},
	plugins: [sveltekit()]
});

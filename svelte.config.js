import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
const dev = process.argv.includes('dev');
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		// target: '#svelte',
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/sveltekit" : "",
		}
	}
};

export default config;

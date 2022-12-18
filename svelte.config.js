import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			precompress: true
		}),
		alias: {
			'lib/*': './src/routes/lib/*'
		}
	}
};

export default config;

import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';
import Icons from 'unplugin-icons/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Unocss(),
		Icons({
			compiler: 'svelte'
		})
	]
};

export default config;

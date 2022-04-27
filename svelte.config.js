import adapter from '@sveltejs/adapter-auto';
import postcss from 'rollup-plugin-postcss';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},

	plugins: [postcss()]
};

export default config;

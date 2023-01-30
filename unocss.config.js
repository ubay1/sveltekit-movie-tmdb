import {
	defineConfig,
	// presetAttributify,
	// presetTypography,
	// presetMini,
	// presetWebFonts,
	presetWind,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

export default defineConfig({
	shortcuts: {
		'form-input':
			'bg-gray-2 font-standar px-3 rounded-md h-10 w-fill text-sm border-none focus:outline-stone-3',
		btn: 'bg-transparent border-none p-4 text-white'
	},
	presets: [
		presetUno(),
		presetWind(),
		presetIcons({
			warn: true
		})
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	theme: {
		colors: {
			primary: '#fc6830'
		},
		breakpoints: {
			xxs: '320px',
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		}
	}
});

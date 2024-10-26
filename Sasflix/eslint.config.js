import eslint from '@eslint/js';
import vuePlugin from 'eslint-plugin-vue';
import importPlugin from 'eslint-plugin-import';
import vuePrettier from '@vue/eslint-config-prettier/skip-formatting';

export default [
	eslint.configs.recommended,
	vuePrettier,
	{
		files: ['**/*.vue'],
		plugins: {
			vue: vuePlugin,
		},
		languageOptions: {
			parser: vuePlugin.parser,
		},
		rules: {
			'vue/no-unused-vars': 'error',
		},
	},
	{
		files: ['**/*.js', '**/*.ts'],
		plugins: {
			import: importPlugin,
		},
		rules: {
			'semi': ['error', 'always'],
			'no-unused-vars': 'error',
			'no-var': 'error',
			'indent': ['error', 'tab'],
			'quotes': ['error', 'single'],
			'max-len': ['warn', { code: 110 }],
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
				},
			],
		},
	},
];
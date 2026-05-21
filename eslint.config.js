import tseslint from 'typescript-eslint';
import obsidianmd from 'eslint-plugin-obsidianmd';
import globals from 'globals';
import { globalIgnores } from 'eslint/config';
import pluginOxlint from 'eslint-plugin-oxlint';

export default tseslint.config(
	globalIgnores([
		'node_modules',
		'dist',
		'rolldown.config.ts',
		'eslint.config.js',
		'version-bump.mjs',
		'versions.json',
		'main.js',
		'package.json',
	]),

	{
		files: ['**/*.ts'],
		languageOptions: {
			globals: {
				...globals.browser,
			},
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},

	...obsidianmd.configs.recommended,

	...pluginOxlint.configs['flat/recommended'],
);

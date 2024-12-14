import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    {
        languageOptions: {
            globals: globals.browser,
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
        },
        plugins: {
            eslintPluginPrettier,
            '@typescript-eslint': eslintPluginTypescript,
        },
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-shadow': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/consistent-type-imports': 'warn',
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'implicit-arrow-linebreak': 'off',
            'no-shadow': 'off',
            'no-underscore-dangle': 'off',
            'object-curly-newline': 'off',
            'operator-linebreak': 'off',
            'quote-props': 'off',
            'arrow-body-style': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'no-param-reassign': 'off',
            'no-undef': 'error',
            'no-unused-vars': 'warn',
            'eol-last': 'off',
        },
        ignores: [
            'eslint.config.js',
            'src/app/js/plugins/*',
            'dist/**/*',
            'node_modules/',
        ],
    },
];

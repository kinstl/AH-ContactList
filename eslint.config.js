import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: { globals: globals.browser },
        plugins: {
            eslintPluginPrettier,
        },
        rules: {
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'off',
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
            'no-undef': 'off',
            'eol-last': 'off',
        },
    },
    pluginJs.configs.recommended,
];

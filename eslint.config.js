import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        languageOptions: { globals: globals.browser },
        plugins: {
            eslintPluginPrettier,
        },
        files: ['**/*.js'],
        rules: {
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
            'no-undef': 'warn',
            'no-unused-vars': 'warn',
            'eol-last': 'off',
        },
        ignores: ['src/app/js/plugins/*'],
    },
];

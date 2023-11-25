module.exports = {
    extends: [
        'standard-with-typescript',
        'plugin:mocha/recommended'
    ],
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        'brace-style': ['error', 'stroustrup'],
        '@typescript-eslint/no-extraneous-class': 0,
        'max-len': ['error', { code: 120, ignoreUrls: true }],
        '@typescript-eslint/brace-style': 'off',
        'no-param-reassign': 2
    },
    plugins: [
        'mocha'
    ]
}

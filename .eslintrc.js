module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'prettier/prettier': ['error', { tabWidth: 4 }],
    },
};

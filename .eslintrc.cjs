/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:vue/vue3-recommended",
        "@vue/eslint-config-typescript/recommended",
        "prettier"
    ],
    overrides: [],
    plugins: ["vue", "@typescript-eslint"],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        extraFileExtensions: [".vue"],
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.eslint.json",
        sourceType: "module",
        tsconfigRootDir: __dirname
    },
    rules: {
        "@typescript-eslint/consistent-type-definitions": ["none"]
    }
}

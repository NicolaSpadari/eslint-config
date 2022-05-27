module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    overrides: [
        {
            files: ["*.vue"],
            parser: "vue-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser"
            }
        }
    ],
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended"
    ],
    rules: {
        "no-undef": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-interface": "off",

        "vue/max-attributes-per-line": ["off"],
        "vue/no-v-html": "off",
        "vue/require-prop-types": "off",
        "vue/require-default-prop": "off",
        "vue/multi-word-component-names": "off",

        "prettier/prettier": ["error", {
            printWidth: 120,
            tabWidth: 4,
            useTabs: false,
            semi: true,
            singleQuote: false,
            quoteProps: "consistent",
            trailingComma: "es5",
            bracketSpacing: true,
            bracketSameLine: false,
            arrowParens: "always",
            vueIndentScriptAndStyle: true,
            endOfLine: "auto"
        }]
    }
};
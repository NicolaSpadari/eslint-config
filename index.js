module.exports = {
	"extends": ["@antfu"],
    "rules": {
        "no-tabs": ["off"],
        "quotes": ["off"],
        "indent": ["off"],
        "semi": ["off"],
        "curly": ["off"],
        "brace-style": ["off"],
        "no-console": ["off"],
        "no-new-func": ["off"],
        "arrow-parens": ["error", "always"],
        "antfu/import-dedupe": ["off"],
        "@typescript-eslint/semi": ["warn", "always"],
        "@typescript-eslint/indent": ["off"],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/comma-dangle": ["warn", "never"],
        "@typescript-eslint/brace-style": ["error", "1tbs"],
        "vue/html-indent": ["error", 4, {
            "baseIndent": 1
        }],
        "vue/script-indent": ["error", 4, {
            "baseIndent": 1
        }],
        "vue/component-tags-order": ["error", {
            "order": ["template", "script", "style"]
        }]
    }
};

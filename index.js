module.exports = {
    "env": {
		"es6": true,
		"browser": true,
		"node": true
	},
	"extends": ["standard", "plugin:import/recommended", "plugin:eslint-comments/recommended", "plugin:jsonc/recommended-with-jsonc", "plugin:vue/vue3-recommended"],
	"plugins": ["html", "unicorn"],
	"settings": {
		"import/resolver": {
			"node": { "extensions": [".js", ".mjs"] }
		}
	},
	"overrides": [
		{
			"files": ["*.json", "*.json5"],
			"parser": "jsonc-eslint-parser",
			"rules": {
				"quotes": ["error", "single"],
				"quote-props": ["error", "always"],
				"comma-dangle": ["error", "never"]
			}
		},
		{
			"files": ["package.json"],
			"parser": "jsonc-eslint-parser",
			"rules": {
				"jsonc/sort-keys": [
					"error",
					{
						"pathPattern": "^$",
						"order": ["name", "version", "description", "keywords", "license", "repository", "funding", "author", "type", "files", "exports", "main", "module", "unpkg", "bin", "scripts", "husky", "lint-staged", "peerDependencies", "peerDependenciesMeta", "dependencies", "devDependencies", "eslintConfig"]
					},
					{
						"pathPattern": "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
						"order": { "type": "asc" }
					}
				]
			}
		},
		{
			"files": ["*.vue"],
			"parser": "vue-eslint-parser",
			"rules": {
				"no-unused-vars": "off"
			}
		}
	],
	"rules": {
		// import
		"import/order": "error",
		"import/first": "error",
		"import/no-mutable-exports": "error",
		"import/no-unresolved": "off",
		"import/no-absolute-path": "off",

		// Common
		"semi": ["warn", "always"],
		"curly": ["error", "multi-or-nest", "consistent"],
		"quotes": ["error", "double"],
		"quote-props": ["error", "consistent-as-needed"],
		"no-unused-vars": "warn",
		"no-param-reassign": "off",
		"array-bracket-spacing": ["error", "never"],
		"brace-style": ["error", "1tbs", { "allowSingleLine": true }],
		"block-spacing": ["error", "always"],
		"camelcase": "warn",
		"comma-spacing": ["error", { "before": false, "after": true }],
		"comma-style": ["error", "last"],
		"comma-dangle": ["error", "always-multiline"],
		"no-constant-condition": "warn",
		"no-debugger": "error",
		"no-console": ["off"],
		"no-cond-assign": ["error", "always"],
        "no-tabs": ["off"],
		"func-call-spacing": ["off", "never"],
		"key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
		"indent": ["off", "tab"],
		"no-restricted-syntax": ["error", "DebuggerStatement", "LabeledStatement", "WithStatement"],
		"object-curly-spacing": ["error", "always"],
		"no-return-await": "off",
		"space-before-function-paren": ["error", "never"],
        "max-len": ["error", { "code": 130}],

		// es6
		"no-var": "error",
		"prefer-const": [
			"error",
			{
				"destructuring": "any",
				"ignoreReadBeforeAssign": true
			}
		],
		"prefer-arrow-callback": [
			"error",
			{
				"allowNamedFunctions": false,
				"allowUnboundThis": true
			}
		],
		"object-shorthand": [
			"error",
			"always",
			{
				"ignoreConstructors": false,
				"avoidQuotes": true
			}
		],
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"template-curly-spacing": "error",
		"arrow-parens": ["error", "as-needed"],
		"generator-star-spacing": "off",
		"spaced-comment": [
			"error",
			"always",
			{
				"line": {
					"markers": ["/"],
					"exceptions": ["/", "#"]
				},
				"block": {
					"markers": ["!"],
					"exceptions": ["*"],
					"balanced": true
				}
			}
		],

        // vue
        "vue/max-attributes-per-line": "off",
		"vue/no-v-html": "off",
		"vue/require-prop-types": "error",
		"vue/require-default-prop": "off",
		"vue/multi-word-component-names": "off",
        "vue/html-indent": ["error", "tab"],
        "vue/script-indent": ["error", "tab", {
            "baseIndent": 1
        }],

		// best-practice
		"array-callback-return": "error",
		"block-scoped-var": "error",
		"consistent-return": "off",
		"complexity": ["off", 11],
		"eqeqeq": ["error", "smart"],
		"no-alert": "warn",
		"no-case-declarations": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-with": "error",
		"no-void": "error",
		"no-useless-escape": "off",
		"vars-on-top": "error",
		"require-await": "off",
		"no-return-assign": "off",
		"operator-linebreak": ["error", "before"],

		// unicorns
		"unicorn/error-message": "error",
		"unicorn/escape-case": "error",
		"unicorn/no-array-instanceof": "error",
		"unicorn/no-new-buffer": "error",
		"unicorn/no-unsafe-regex": "off",
		"unicorn/number-literal-case": "error",
		"unicorn/prefer-exponentiation-operator": "error",
		"unicorn/prefer-includes": "error",
		"unicorn/prefer-starts-ends-with": "error",
		"unicorn/prefer-text-content": "error",
		"unicorn/prefer-type-error": "error",
		"unicorn/throw-new-error": "error",

		"no-use-before-define": ["error", { "functions": false, "classes": false, "variables": true }],
		"eslint-comments/disable-enable-pair": "off",
		"import/no-named-as-default-member": "off",

		"sort-imports": [
			"warn",
			{
				"ignoreCase": false,
				"ignoreDeclarationSort": true,
				"ignoreMemberSort": false,
				"memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
				"allowSeparatedGroups": false
			}
		]
	}
}
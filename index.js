module.exports = {
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module"
    },
    env: {
        browser: true,
        es6: true,
        es2021: true,
        node: true
    },
    plugins: [
        "html",
        "import",
        "n",
        "promise",
        "unicorn"
    ],
    globals: {
        document: "readonly",
        navigator: "readonly",
        window: "readonly"
    },
    ignorePatterns: [
        "*.min.*",
        "dist",
        "public",
        "temp",
        "package-lock.json",
        "!.vscode"
    ],
    settings: {
        "import/resolver": {
            node: { extensions: [".js", ".mjs", ".ts"] }
        }
    },
    extends: [
        "plugin:import/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:jsonc/recommended-with-jsonc",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended"
    ],
    overrides: [
        // TypeScript
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            rules: {
                "import/named": "off",
                "import/no-unresolved": ["off"],
                "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
                "@typescript-eslint/member-delimiter-style": ["error", { multiline: { delimiter: "none" } }],
                "@typescript-eslint/type-annotation-spacing": ["error", {}],
                "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports", disallowTypeAnnotations: false }],
                "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
                "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
                "@typescript-eslint/prefer-ts-expect-error": "error",
                "no-useless-constructor": "off",
                "indent": "off",
                "@typescript-eslint/indent": ["error", 4, {
                    SwitchCase: 1,
                    VariableDeclarator: 1,
                    outerIIFEBody: 1,
                    MemberExpression: 1,
                    FunctionDeclaration: { parameters: 1, body: 1 },
                    FunctionExpression: { parameters: 1, body: 1 },
                    CallExpression: { arguments: 1 },
                    ArrayExpression: 1,
                    ObjectExpression: 1,
                    ImportDeclaration: 1,
                    flatTernaryExpressions: false,
                    ignoreComments: false,
                    ignoredNodes: [
                        "TemplateLiteral *",
                        "JSXElement",
                        "JSXElement > *",
                        "JSXAttribute",
                        "JSXIdentifier",
                        "JSXNamespacedName",
                        "JSXMemberExpression",
                        "JSXSpreadAttribute",
                        "JSXExpressionContainer",
                        "JSXOpeningElement",
                        "JSXClosingElement",
                        "JSXFragment",
                        "JSXOpeningFragment",
                        "JSXClosingFragment",
                        "JSXText",
                        "JSXEmptyExpression",
                        "JSXSpreadChild",
                        "TSTypeParameterInstantiation"
                    ],
                    offsetTernaryExpressions: true
                }],
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
                "no-redeclare": "off",
                "@typescript-eslint/no-redeclare": "error",
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: false, variables: true }],
                "brace-style": "off",
                "@typescript-eslint/brace-style": ["error", "1tbs"],
                "comma-dangle": "off",
                "@typescript-eslint/comma-dangle": ["error", "never"],
                "object-curly-spacing": "off",
                "@typescript-eslint/object-curly-spacing": ["error", "always"],
                "semi": ["warn", "always"],
                "@typescript-eslint/semi": ["warn", "always"],
                "quotes": "off",
                "@typescript-eslint/quotes": ["error", "double"],
                "space-before-blocks": "off",
                "@typescript-eslint/space-before-blocks": ["error", "always"],
                "space-before-function-paren": "off",
                "@typescript-eslint/space-before-function-paren": ["error", "never"],
                "space-infix-ops": "off",
                "@typescript-eslint/space-infix-ops": "error",
                "keyword-spacing": "off",
                "@typescript-eslint/keyword-spacing": ["error", { before: true, after: true }],
                "comma-spacing": "off",
                "@typescript-eslint/comma-spacing": ["error", { before: false, after: true }],
                "no-extra-parens": "off",
                "@typescript-eslint/no-extra-parens": ["error", "functions"],
                "no-dupe-class-members": "off",
                "@typescript-eslint/no-dupe-class-members": "error",
                "no-loss-of-precision": "off",
                "@typescript-eslint/no-loss-of-precision": "error",
                "lines-between-class-members": "off",
                "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
                "@typescript-eslint/naming-convention": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/explicit-member-accessibility": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/parameter-properties": "off",
                "@typescript-eslint/no-empty-interface": "off",
                "@typescript-eslint/ban-ts-ignore": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/no-namespace": "off",
                "@typescript-eslint/triple-slash-reference": "off"
            }
        },

        // Vue TS composables
        {
            files: ["use*.ts"],
            rules: {
                "no-undef": "off"
            }
        },

        // Vue
        {
            files: ["*.vue"],
            parser: "vue-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser"
            },
            rules: {
                "semi": ["error", "always"],
                "indent": "off",
                "no-unused-vars": "off",
                "no-undef": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "vue/max-attributes-per-line": "off",
                "vue/no-v-html": "off",
                "vue/require-prop-types": "off",
                "vue/require-default-prop": "off",
                "vue/multi-word-component-names": "off",
                "vue/prefer-import-from-vue": "off",
                "vue/no-setup-props-destructure": "off",
                "vue/block-tag-newline": ["error", {
                    singleline: "always",
                    multiline: "always"
                }],
                "vue/component-name-in-template-casing": ["error", "PascalCase"],
                "vue/component-options-name-casing": ["error", "PascalCase"],
                "vue/custom-event-name-casing": ["error", "camelCase"],
                "vue/define-macros-order": ["off"],
                "vue/html-comment-content-spacing": ["error", "always", {
                    exceptions: ["-"]
                }],
                "vue/html-indent": ["error", 4, {
                    baseIndent: 1
                }],
                "vue/script-indent": ["error", 4, {
                    baseIndent: 1
                }],
                "vue/component-tags-order": ["error", {
                    order: ["template", "script", "style"]
                }],
                "vue/no-restricted-v-bind": ["error", "/^v-/"],
                "vue/no-useless-v-bind": "error",
                "vue/no-v-text-v-html-on-component": "error",
                "vue/padding-line-between-blocks": ["error", "always"],
                "vue/prefer-separate-static-class": "error",

                // extensions
                "vue/array-bracket-spacing": ["error", "never"],
                "vue/arrow-spacing": ["error", { before: true, after: true }],
                "vue/block-spacing": ["error", "always"],
                "vue/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
                "vue/comma-dangle": ["error", "never"],
                "vue/comma-spacing": ["error", { before: false, after: true }],
                "vue/comma-style": ["error", "last"],
                "vue/dot-location": ["error", "property"],
                "vue/dot-notation": ["error", { allowKeywords: true }],
                "vue/eqeqeq": ["error", "smart"],
                "vue/key-spacing": ["error", { beforeColon: false, afterColon: true }],
                "vue/keyword-spacing": ["error", { before: true, after: true }],
                "vue/no-constant-condition": "warn",
                "vue/no-empty-pattern": "error",
                "vue/no-extra-parens": ["error", "functions"],
                "vue/no-irregular-whitespace": "error",
                "vue/no-loss-of-precision": "error",
                "vue/no-restricted-syntax": [
                    "error",
                    "DebuggerStatement",
                    "LabeledStatement",
                    "WithStatement"
                ],
                "vue/no-sparse-arrays": "error",
                "vue/object-curly-newline": ["error", { multiline: true, consistent: true }],
                "vue/object-curly-spacing": ["error", "always"],
                "vue/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
                "vue/object-shorthand": [
                    "error",
                    "always",
                    {
                        ignoreConstructors: false,
                        avoidQuotes: true
                    }
                ],
                "vue/operator-linebreak": ["error", "before"],
                "vue/prefer-template": "error",
                "vue/quote-props": ["error", "consistent-as-needed"],
                "vue/space-in-parens": ["error", "never"],
                "vue/space-infix-ops": "error",
                "vue/space-unary-ops": ["error", { words: true, nonwords: false }],
                "vue/template-curly-spacing": "error"
            }
        },

        // Json
        {
            files: ["*.json", "*.json5"],
            parser: "jsonc-eslint-parser",
            rules: {
                "jsonc/array-bracket-spacing": ["error", "never"],
                "jsonc/comma-dangle": ["error", "never"],
                "jsonc/comma-style": ["error", "last"],
                "jsonc/indent": ["error", 4],
                "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
                "jsonc/no-octal-escape": "error",
                "jsonc/object-curly-newline": ["error", { multiline: true, consistent: true }],
                "jsonc/object-curly-spacing": ["error", "always"],
                "jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }]
            }
        }
    ],
    rules: {
        "no-var": "warn",
        "object-shorthand": ["warn", "properties"],

        "accessor-pairs": ["error", { setWithoutGet: true, enforceForClassMembers: true }],
        "array-bracket-spacing": ["error", "never"],
        "array-callback-return": ["error", {
            allowImplicit: false,
            checkForEach: false
        }],
        "arrow-spacing": ["error", { before: true, after: true }],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "camelcase": ["error", {
            allow: ["^UNSAFE_"],
            properties: "never",
            ignoreGlobals: true
        }],
        "comma-dangle": ["error", {
            arrays: "never",
            objects: "never",
            imports: "never",
            exports: "never",
            functions: "never"
        }],
        "comma-spacing": ["error", { before: false, after: true }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never", { enforceForClassMembers: true }],
        "constructor-super": "error",
        "curly": ["error", "multi-line"],
        "default-case-last": "error",
        "dot-location": ["error", "property"],
        "dot-notation": ["error", { allowKeywords: true }],
        "eol-last": "error",
        "eqeqeq": ["error", "always", { null: "ignore" }],
        "func-call-spacing": ["error", "never"],
        "generator-star-spacing": ["error", { before: true, after: true }],
        "indent": ["error", 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 1, body: 1 },
            FunctionExpression: { parameters: 1, body: 1 },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: ["TemplateLiteral *", "JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
            offsetTernaryExpressions: true
        }],
        "key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "keyword-spacing": ["error", { before: true, after: true }],
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "multiline-ternary": ["error", "never"],
        "new-cap": ["error", { newIsCap: true, capIsNew: false, properties: true }],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-condition": ["error", { checkLoops: false }],
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-useless-backreference": "error",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "functions"],
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
        "no-lone-blocks": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-prototype-builtins": "error",
        "no-useless-catch": "error",
        "no-mixed-operators": ["error", {
            groups: [
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            allowSamePrecedence: true
        }],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-redeclare": ["error", { builtinGlobals: false }],
        "no-regex-spaces": "error",
        "no-return-assign": ["error", "except-parens"],
        "no-self-assign": ["error", { props: true }],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": ["error", {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
        }],
        "no-unused-vars": ["error", {
            args: "none",
            caughtErrors: "none",
            ignoreRestSiblings: true,
            vars: "all"
        }],
        "no-use-before-define": ["error", { functions: false, classes: false, variables: false }],
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-newline": ["error", { multiline: true, consistent: true }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
        "one-var": ["error", { initialized: "never" }],
        "operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before", "|>": "before" } }],

        "unicorn/error-message": "error",
        "unicorn/escape-case": "error",
        "unicorn/no-instanceof-array": "error",
        "unicorn/no-new-buffer": "error",
        "unicorn/no-unsafe-regex": "off",
        "unicorn/number-literal-case": "error",
        "unicorn/prefer-includes": "error",
        "unicorn/prefer-starts-ends-with": "error",
        "unicorn/prefer-text-content": "error",
        "unicorn/prefer-type-error": "error",
        "unicorn/throw-new-error": "error",

        "padded-blocks": ["error", { blocks: "never", switches: "never", classes: "never" }],
        "prefer-const": ["error", { destructuring: "all" }],
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "never"],
        "semi-spacing": ["error", { before: false, after: true }],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }
        ],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", { words: true, nonwords: false }],
        "spaced-comment": ["error", "always", {
            line: { markers: ["*package", "!", "/", ",", "="] },
            block: { balanced: true, markers: ["*package", "!", ",", ":", "::", "flow-include"], exceptions: ["*"] }
        }],
        "symbol-description": "error",
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": ["error", "never"],
        "use-isnan": ["error", {
            enforceForSwitchCase: true,
            enforceForIndexOf: true
        }],
        "valid-typeof": ["error", { requireStringLiterals: true }],
        "wrap-iife": ["error", "any", { functionPrototypeMethods: true }],
        "yield-star-spacing": ["error", "both"],
        "yoda": ["error", "never"],

        "import/export": "error",
        "import/first": "error",
        "import/no-absolute-path": ["error", { esmodule: true, commonjs: true, amd: false }],
        "import/no-duplicates": "error",
        "import/no-named-default": "error",
        "import/no-webpack-loader-syntax": "error",

        "n/handle-callback-err": ["error", "^(err|error)$"],
        "n/no-callback-literal": "error",
        "n/no-deprecated-api": "error",
        "n/no-exports-assign": "error",
        "n/no-new-require": "error",
        "n/no-path-concat": "error",
        "n/process-exit-as-throw": "error",

        "promise/param-names": "error",

        "vue/valid-attribute-name": "off",
        "vue/comment-directive": "off"
    }
}

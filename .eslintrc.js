module.exports = {
    extends: ["airbnb-typescript", "plugin:@typescript-eslint/recommended", "prettier", "plugin:prettier/recommended"],
    plugins: ["import", "@typescript-eslint", "simple-import-sort"],
    env: {
        browser: true,
        es6: true,
        mocha: true
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json"
    },
    rules: {
        // I'm not sure why we need to define this seeing as how this config has nothing to do with react but without
        // it we're getting a linting error: "Definition for rule 'react/jsx-filename-extension' was not found."
        "react/jsx-filename-extension": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                args: "all",
                argsIgnorePattern: "^_",
                vars: "local"
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: true, enums: true }],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: true
            }
        ],
        "@typescript-eslint/no-floating-promises": 2,
        "no-void": "off",
        "import/prefer-default-export": "off",
        "no-empty": "off",
        "linebreak-style": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto"
            }
        ],
        "newline-before-return": "error",
        "prefer-destructuring": "off",
        "no-underscore-dangle": "off",
        "import/no-extraneous-dependencies": "off",
        "no-new": "off",
        "max-classes-per-file": "off",
        "class-methods-use-this": "off"
    },
    overrides: [
        {
            files: ["*.spec.{ts,tsx}"],
            rules: {
                "no-unused-expressions": "off",
                "@typescript-eslint/no-unused-expressions": "off"
            }
        }
    ],
    settings: {
        react: {
            version: "999.999.999" // suppresses warning when a package doesn't have react installed.
        }
    }
};


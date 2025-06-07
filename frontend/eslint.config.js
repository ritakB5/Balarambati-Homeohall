import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist", "coverage", "**/*.d.ts"] },
  // Base configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      prettierConfig,
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
      "react/prop-types": "off", // Not needed with TypeScript
      "react/display-name": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".jsx"] }],
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off", // Not needed with TypeScript
      
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      
      // Import rules
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      
      // TypeScript rules
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          allowSingleExtends: true,
        },
      ],
      
      // JSX A11y rules
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-has-content": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
      "jsx-a11y/heading-has-content": "warn",
      "jsx-a11y/img-redundant-alt": "warn",
      "jsx-a11y/no-access-key": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "jsx-a11y/scope": "warn",
      
      // General rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "no-param-reassign": ["error", { props: false }],
      "prefer-const": "error",
      "prefer-template": "error",
      "no-var": "error",
      "object-shorthand": ["error", "always"],
      "no-unused-vars": "off", // Handled by @typescript-eslint/no-unused-vars
    },
  },
  // TypeScript specific rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // TypeScript specific rules can go here
    },
  },
  // Test files specific rules
  {
    files: ["**/*.test.{ts,tsx,js,jsx}", "**/__tests__/**/*.{ts,tsx,js,jsx}"],
    env: {
      jest: true,
    },
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: true },
      ],
      // Allow test utilities like expect, it, test, etc.
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);

import stylisticTs from "@stylistic/eslint-plugin";
import pluginVitest from "@vitest/eslint-plugin";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import { globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";

/*
 * To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
 * import { configureVueProject } from '@vue/eslint-config-typescript'
 * configureVueProject({ scriptLangs: ['ts', 'tsx'] })
 * More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup
 */

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"]
  },

  globalIgnores([
    "**/*.js",
    "**/*.cjs",
    "**/dist/**",
    "**/dist-ssr/**",
    "**/coverage/**"
  ]),

  {
    plugins: {
      "@stylistic/ts": stylisticTs
    }
  },
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"]
  },
  stylisticTs.configs["disable-legacy"],
  {
    rules: {
      "@stylistic/ts/indent": [
        "error",
        2
      ],
      "@stylistic/ts/quote-props": [
        "error",
        "as-needed"
      ],
      "@stylistic/ts/block-spacing": [
        "error",
        "always"
      ],
      "@stylistic/ts/object-curly-spacing": [
        "error",
        "always"
      ],
      "@stylistic/ts/semi": [
        "error",
        "always"
      ],
      "@stylistic/ts/quotes": [
        "error",
        "double"
      ],
      "@stylistic/ts/comma-spacing": [
        "error",
        { before: false,
          after: true }
      ],
      "no-unused-vars": "off",
      "vue/block-lang": "off",
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": [
        "error", // or "error"
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ],
      "max-lines": [
        "warn",
        { max: 500,
          skipBlankLines: true,
          skipComments: true }
      ],
      "max-lines-per-function": [
        "warn",
        { max: 200,
          skipBlankLines: true,
          skipComments: true }
      ]
    }
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    }
  }
);

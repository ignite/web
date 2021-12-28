import cjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import sass from "rollup-plugin-sass";

export default {
  input: "src/index.ts",
  output: {
    dir: "lib",
    format: "esm",
  },
  plugins: [vue(), ts(), sass({ output: "lib/style.css" }), cjs()],
};

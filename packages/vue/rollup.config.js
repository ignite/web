import cjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'esm'
  },
  plugins: [vue(), postcss(), ts(), cjs()]
}

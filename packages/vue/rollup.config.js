import cjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import ts from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'esm'
  },
  plugins: [vue(), postcss(), ts(), cjs()]
  // external: ['vue', 'vuex'],
}

import cjs from '@rollup/plugin-commonjs'
import ts from '@rollup/plugin-typescript'

export default {
	input: 'src/index.js',
	output: {
		dir: 'lib',
		format: 'esm'
	},
	plugins: [ts(), cjs()]
}

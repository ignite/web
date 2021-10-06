const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path')

module.exports = {
	devServer: {
		disableHostCheck: true
	},
	transpileDependencies: true,
	configureWebpack: {
		resolve: {
			symlinks: false,
			alias: {
				vue$: path.resolve('./node_modules/vue/dist/vue.esm-bundler.js')
			}
		},
		plugins: [new NodePolyfillPlugin()]
	}
}

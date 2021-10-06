const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  transpileDependencies: true,
  publicPath: './',
  configureWebpack: {
    externals: {
      'element-ui': {
        commonjs: 'element-ui',
        commonjs2: 'element-ui',
        root: 'ELEMENT',
        amd: 'element-ui',
      },
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        root: 'Vue',
        amd: 'vue',
      },
      axios: {
        commonjs: 'axios',
        commonjs2: 'axios',
        root: 'axios',
        amd: 'axios',
      },
      dayjs: {
        commonjs: 'dayjs',
        commonjs2: 'dayjs',
        root: 'dayjs',
        amd: 'dayjs',
      },
    },
    entry: {
      main: './src/index.ts',
    },
    plugins: [new webpack.IgnorePlugin({ resourceRegExp: /^\.\/wordlists\/(?!english)/ }), new NodePolyfillPlugin()],
  },
}

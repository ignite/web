const path = require('path');

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
	features: {
		postcss: false,
  },
	// todo
	// webpackFinal: async (config) => ({
	// 	...config,
	// 	resolve: {
	// 		alias: {
	// 			'@StarportUI': path.resolve(__dirname, '../..' ,'vue/src/components'),
	// 		},
	// 	},
	// }),
}

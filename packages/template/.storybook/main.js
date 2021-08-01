const path = require('path');

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
		'@storybook/addon-actions',
    // '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
		// 'storybook-vue-router'
  ],
	features: {
		postcss: false,
  },
	// webpackFinal: async (config) => ({
	// 	...config,
	// 	resolve: {
	// 		alias: {
	// 			'@StarportUI': path.resolve(__dirname, '../..' ,'vue/src/components'),
	// 		},
	// 	},
	// }),
}

const path = require('path');

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
		'storybook-addon-pseudo-states'
  ],
	features: {
		postcss: false,
  },
}

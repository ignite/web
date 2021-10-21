// explicitly import all @starport/vue styles
import '@starport/vue/lib/starport-vue.css'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true
  },
	viewport: {
		viewports: INITIAL_VIEWPORTS
	}
}

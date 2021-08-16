import { app } from '@storybook/vue3';
import Vuex from 'vuex'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import store from '../src/store'

import '../../vue/src/styles/app.scss'

app.config.globalProperties._depsLoaded = true
app.use(store)

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

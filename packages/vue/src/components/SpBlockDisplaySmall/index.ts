import { App as Application } from 'vue'
import SpBlockDisplaySmall from './SpBlockDisplaySmall.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpBlockDisplaySmall)
	},
}

// use(Plugin);

export default Plugin

export { SpBlockDisplaySmall }

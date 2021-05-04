import { App as Application } from 'vue'
import SpBlockDisplayFull from './SpBlockDisplayFull.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpBlockDisplayFull)
	},
}

// use(Plugin);

export default Plugin

export { SpBlockDisplayFull }

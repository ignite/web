import { App as Application } from 'vue'
import SpBlockDisplayLine from './SpBlockDisplayLine.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpBlockDisplayLine)
	},
}

// use(Plugin);

export default Plugin

export { SpBlockDisplayLine }

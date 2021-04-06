import { App as Application } from 'vue'
import SpType from './SpType.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpType)
	}
}

// use(Plugin);

export default Plugin

export { SpType }

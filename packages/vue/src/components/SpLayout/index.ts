import { App as Application } from 'vue'
import SpLayout from './SpLayout.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpLayout)
	}
}

// use(Plugin);

export default Plugin

export { SpLayout }

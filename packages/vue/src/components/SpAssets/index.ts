import { App as Application } from 'vue'
import SpAssets from './SpAssets.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpAssets)
	}
}

// use(Plugin);

export default Plugin

export { SpAssets }

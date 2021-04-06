import { App as Application } from 'vue'
import SpRelayers from './SpRelayers.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpRelayers)
	}
}

// use(Plugin);

export default Plugin

export { SpRelayers }

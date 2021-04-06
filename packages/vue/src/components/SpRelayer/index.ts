import { App as Application } from 'vue'
import SpRelayer from './SpRelayer.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpRelayer)
	}
}

// use(Plugin);

export default Plugin

export { SpRelayer }

import { App as Application } from 'vue'
import SpBlockHeight from './SpBlockHeight.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpBlockHeight)
	}
}

// use(Plugin);

export default Plugin

export { SpBlockHeight }

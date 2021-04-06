import { App as Application } from 'vue'
import SpTokenSend from './SpTokenSend.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpTokenSend)
	}
}

// use(Plugin);

export default Plugin

export { SpTokenSend }

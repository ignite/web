import { App as Application } from 'vue'
import SpLinkIcon from './SpLinkIcon.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpLinkIcon)
	}
}

// use(Plugin);

export default Plugin

export { SpLinkIcon }

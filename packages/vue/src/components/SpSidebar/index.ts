import { App as Application } from 'vue'
import SpSidebar from './SpSidebar.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpSidebar)
	}
}

// use(Plugin);

export default Plugin

export { SpSidebar }

import { App as Application } from 'vue'
import SpKeyArea from './SpKeyArea.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpKeyArea)
	}
}

// use(Plugin);

export default Plugin

export { SpKeyArea }

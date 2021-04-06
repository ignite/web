import { App as Application } from 'vue'
import SpStatusAPI from './SpStatusAPI.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpStatusAPI)
	}
}

// use(Plugin);

export default Plugin

export { SpStatusAPI }

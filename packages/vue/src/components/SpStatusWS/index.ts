import { App as Application } from 'vue'
import SpStatusWS from './SpStatusWS.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpStatusWS)
	}
}

// use(Plugin);

export default Plugin

export { SpStatusWS }

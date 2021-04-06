import { App as Application } from 'vue'
import SpStatusLED from './SpStatusLED.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpStatusLED)
	}
}

// use(Plugin);

export default Plugin

export { SpStatusLED }

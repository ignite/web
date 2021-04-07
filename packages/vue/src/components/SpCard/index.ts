import { App as Application } from 'vue'
import SpCard from './SpCard.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpCard)
	}
}

// use(Plugin);

export default Plugin

export { SpCard }

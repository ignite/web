import { App as Application } from 'vue'
import SpButton from './SpButton.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpButton)
	}
}

// use(Plugin);

export default Plugin

export { SpButton }

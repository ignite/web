import { App as Application } from 'vue'
import SpWalletCreate from './SpWalletCreate.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpWalletCreate)
	}
}

// use(Plugin);

export default Plugin

export { SpWalletCreate }

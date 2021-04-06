import { App as Application } from 'vue'
import SpWalletMenu from './SpWalletMenu.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpWalletMenu)
	}
}

// use(Plugin);

export default Plugin

export { SpWalletMenu }

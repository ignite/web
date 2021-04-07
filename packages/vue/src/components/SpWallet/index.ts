import { App as Application } from 'vue'
import SpWallet from './SpWallet.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpWallet)
	}
}

// use(Plugin);

export default Plugin

export { SpWallet }

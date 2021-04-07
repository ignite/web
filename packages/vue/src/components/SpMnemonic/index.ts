import { App as Application } from 'vue'
import SpMnemonic from './SpMnemonic.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpMnemonic)
	}
}

// use(Plugin);

export default Plugin

export { SpMnemonic }

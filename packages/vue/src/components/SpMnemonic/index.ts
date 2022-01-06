import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpMnemonic from './SpMnemonic.vue'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpMnemonic)
	}
}

export default SpMnemonic

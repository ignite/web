import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpWallet from './SpWallet.vue'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpWallet)
	}
}

export default SpWallet

import { App as Application } from 'vue'

import { registerComponent } from '../../utils/plugins/index'
// @ts-ignore
import SpTokenSend from './SpTx.vue'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpTokenSend)
	}
}

export default SpTokenSend

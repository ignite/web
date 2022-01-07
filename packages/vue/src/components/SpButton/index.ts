import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpButton from './SpButton.vue'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpButton)
	}
}

export default SpButton

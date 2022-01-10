import { App as Application } from 'vue'

import { registerComponent } from '../../../../utils/plugins'
// @ts-ignore
import SpHeading from './SpHeading.vue'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpHeading)
	}
}

export default SpHeading

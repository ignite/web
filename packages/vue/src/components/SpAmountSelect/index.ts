import { App as Application } from 'vue'
import SpAmountSelect from './SpAmountSelect.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpAmountSelect)
	}
}

// use(Plugin);

export default Plugin

export { SpAmountSelect }

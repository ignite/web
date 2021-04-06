import { App as Application } from 'vue'
import SpTransferList from './SpTransferList.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpTransferList)
	}
}

// use(Plugin);

export default Plugin

export { SpTransferList }

import { App as Application } from 'vue'
import SpAccountList from './SpAccountList.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpAccountList)
	}
}

// use(Plugin);

export default Plugin

export { SpAccountList }

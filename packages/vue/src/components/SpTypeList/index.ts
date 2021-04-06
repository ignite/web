import { App as Application } from 'vue'
import SpTypeList from './SpTypeList.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application) {
		registerComponent(vue, SpTypeList)
	}
}

// use(Plugin);

export default Plugin

export { SpTypeList }

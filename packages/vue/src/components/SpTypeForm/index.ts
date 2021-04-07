import { App as Application } from 'vue'
import SpTypeForm from './SpTypeForm.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpTypeForm)
	}
}

// use(Plugin);

export default Plugin

export { SpTypeForm }

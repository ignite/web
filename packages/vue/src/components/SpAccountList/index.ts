import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpAccountList from './SpAccountList.vue'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpAccountList)
	}
}

// use(Plugin);

export default SpAccountList

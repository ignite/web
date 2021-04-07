import { App as Application } from 'vue'
import SpStatusRPC from './SpStatusRPC.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpStatusRPC)
	}
}

// use(Plugin);

export default Plugin

export { SpStatusRPC }

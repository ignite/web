import { App as Application } from 'vue'
// @ts-ignore
import SpNavbar from './SpNavbar.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpNavbar)
  },
}

export default SpNavbar

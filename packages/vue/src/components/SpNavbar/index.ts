import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpNavbar from './SpNavbar.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpNavbar)
  }
}

export default SpNavbar

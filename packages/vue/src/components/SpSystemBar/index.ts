import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpSystemBar from './SpSystemBar.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpSystemBar)
  }
}

export default SpSystemBar

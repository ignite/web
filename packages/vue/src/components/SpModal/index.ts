import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpModal from './SpModal.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpModal)
  }
}

export default SpModal

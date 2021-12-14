import { App as Application } from 'vue'
import SpModal from './SpModal.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpModal)
  },
}

export default SpModal

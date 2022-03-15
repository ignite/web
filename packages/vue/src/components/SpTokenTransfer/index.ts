import { App as Application } from 'vue'

import { registerComponent } from '../../utils/plugins/index'
// @ts-ignore
import SpTokenTransfer from './SpTokenTransfer.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpTokenTransfer)
  }
}

export default SpTokenTransfer

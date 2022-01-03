import { App as Application } from 'vue'

// @ts-ignore
import SpTokenSend from './SpTx.vue'

import { registerComponent } from '../../utils/plugins/index'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpTokenSend)
  }
}

export default SpTokenSend

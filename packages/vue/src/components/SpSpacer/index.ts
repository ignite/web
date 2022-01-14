import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpSpacer from './SpSpacer.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpSpacer)
  }
}

export default SpSpacer

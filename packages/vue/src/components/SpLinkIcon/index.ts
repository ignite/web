import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpLinkIcon from './SpLinkIcon.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpLinkIcon)
  }
}

export default SpLinkIcon

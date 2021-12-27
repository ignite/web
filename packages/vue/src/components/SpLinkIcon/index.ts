import { App as Application } from 'vue'
// @ts-ignore

import SpLinkIcon from './SpLinkIcon.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpLinkIcon)
  },
}

export default SpLinkIcon

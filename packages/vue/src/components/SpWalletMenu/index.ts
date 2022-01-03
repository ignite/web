import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpWalletMenu from './SpWalletMenu.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpWalletMenu)
  }
}

export default SpWalletMenu

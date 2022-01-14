import { App as Application } from 'vue'

import { registerComponent } from '../../utils/plugins/index'
// @ts-ignore
import SpAssets from './SpAssets.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpAssets)
  }
}

export default SpAssets

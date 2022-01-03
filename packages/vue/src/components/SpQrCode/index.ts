import { App as Application } from 'vue'

import { registerComponent } from '../../utils/plugins/index'
// @ts-ignore
import SpQrCode from './SpQrCode.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpQrCode)
  }
}

export default SpQrCode

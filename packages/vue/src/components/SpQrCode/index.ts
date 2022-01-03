import { App as Application } from 'vue'

// @ts-ignore
import SpQrCode from './SpQrCode.vue'

import { registerComponent } from '../../utils/plugins/index'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpQrCode)
  },
}

export default SpQrCode

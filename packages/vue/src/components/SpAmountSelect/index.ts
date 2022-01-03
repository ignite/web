import { App as Application } from 'vue'

import { registerComponent } from '../../utils/plugins/index'
// @ts-ignore
import SpAmountSelectNew from './SpAmountSelect.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpAmountSelectNew)
  }
}

export default SpAmountSelectNew

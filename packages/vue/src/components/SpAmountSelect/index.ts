import { App as Application } from 'vue'

// @ts-ignore
import SpAmountSelectNew from './SpAmountSelect.vue'

import { registerComponent } from '../../utils/plugins/index'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpAmountSelectNew)
  },
}

export default SpAmountSelectNew

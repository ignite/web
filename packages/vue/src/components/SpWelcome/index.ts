import { App as Application } from 'vue'

import { registerComponent } from './../../utils/plugins/index'
// @ts-ignore
import SpWelcome from './SpWelcome.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpWelcome)
  }
}

export default SpWelcome

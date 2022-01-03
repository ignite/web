import { App as Application } from 'vue'

// @ts-ignore
import SpCard from './SpCard.vue'

import { registerComponent } from '../../utils/plugins/index'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpCard)
  },
}

export default SpCard

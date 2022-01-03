import { App as Application } from 'vue'

import { registerComponent } from '../../utils/plugins/index'
// @ts-ignore
import SpCard from './SpCard.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpCard)
  }
}

export default SpCard

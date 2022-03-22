import { env } from '@starport/vuex'

import generated from './generated'
export default function init(store) {
  for (const moduleInit of Object.values(generated)) {
    moduleInit(store)
  }
  env(store)
}

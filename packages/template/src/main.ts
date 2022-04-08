import sp from '@starport/vue'
import { useIgnite } from '@ignt/vue'
import { createIgnite } from '@ignt/client'
import { Buffer } from 'buffer'
import { createApp } from 'vue'

// @ts-ignore
import App from './App.vue'

import $r from './router'

// @ts-ignore
globalThis['Buffer'] = Buffer

// ignite
let { inject } = useIgnite()

let ignite = createIgnite({
  env: {
    apiURL: 'http://localhost:1317',
    rpcURL: 'http://localhost:26657',
    wsURL: 'ws://localhost:26657/websocket',
    prefix: 'cosmos'
  }
})

inject(ignite)

ignite.ws.connect()

createApp(App).use($r).use(sp).mount('#app')

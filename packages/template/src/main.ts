import sp from '@starport/vue'
import { Buffer } from 'buffer'
import { createIgnite } from 'ignite-ts-client'
import { useIgnite } from 'ignite-vue-client'
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

ignite.ws.ee().on('ws-chain-id', (chainId: string) => {
  ignite.env.chainID = chainId
})
ignite.ws.ee().on('ws-chain-name', (chainName: string) => {
  ignite.env.chainName = chainName
})
ignite.ws.ee().on('ws-api-status', (connected: boolean) => {
  ignite.env.status.apiConnected = connected
})
ignite.ws.ee().on('ws-rpc-status', (connected: boolean) => {
  ignite.env.status.rpcConnected = connected
})
ignite.ws.ee().on('ws-open', () => {
  ignite.env.status.wsConnected = true
})
ignite.ws.ee().on('ws-close', () => {
  ignite.env.status.wsConnected = false
})

ignite.ws.connect()

createApp(App).use($r).use(sp).mount('#app')

import { createGaia } from 'cosmos-gaia-ts-client'
import { useGaia } from 'cosmos-gaia-vue-client'
import sp from '@starport/vue'
import { Buffer } from 'buffer'
import { createApp } from 'vue'

// @ts-ignore
import App from './App.vue'
import $r from './router'

// @ts-ignore
globalThis['Buffer'] = Buffer

// ts-client
let { inject } = useGaia()

let gaia = createGaia({
  env: {
    apiURL: 'https://api.testnet.cosmos.network:443',
    rpcURL: 'https://rpc.testnet.cosmos.network:443',
    wsURL: 'wss://rpc.testnet.cosmos.network:443/websocket',
    prefix: 'cosmos'
  }
})

inject(gaia)

gaia.ws.ee().on('ws-chain-id', (chainId: string) => {
  gaia.env.chainID = chainId
})
gaia.ws.ee().on('ws-chain-name', (chainName: string) => {
  gaia.env.chainName = chainName
})
gaia.ws.ee().on('ws-api-status', (connected: boolean) => {
  gaia.env.status.apiConnected = connected
})
gaia.ws.ee().on('ws-rpc-status', (connected: boolean) => {
  gaia.env.status.rpcConnected = connected
})
gaia.ws.ee().on('ws-open', () => {
  gaia.env.status.wsConnected = true
})
gaia.ws.ee().on('ws-close', () => {
  gaia.env.status.wsConnected = false
})

gaia.ws.connect()

createApp(App).use($r).use(sp).mount('#app')

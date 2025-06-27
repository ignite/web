/// <reference types="vite/client" />
import { Window as KeplrWindow, Keplr } from '@keplr-wallet/types'

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare global {
  import { OfflineDirectSigner } from '@cosmjs/proto-signing'
  interface KeplrIntereactionOptions {
    readonly sign?: KeplrSignOptions
  }

  export interface KeplrSignOptions {
    readonly preferNoSetFee?: boolean
    readonly preferNoSetMemo?: boolean
  }

  interface Window extends KeplrWindow {
    Vue: any
    leap: Keplr
    keplr: Keplr
    cosmostation: unknown
  }
}

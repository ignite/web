/* eslint-disable */
import { Window as KeplrWindow, Keplr } from '@keplr-wallet/types'

declare global {
  import { OfflineDirectSigner } from '@cosmjs/proto-signing'
  interface KeplrIntereactionOptions {
    readonly sign?: KeplrSignOptions
  }

  export interface KeplrSignOptions {
    readonly preferNoSetFee?: boolean
    readonly preferNoSetMemo?: boolean
  }

  interface CustomKeplr extends Keplr {
    enable(chainId: string | string[]): Promise<void>
    defaultOptions: KeplrIntereactionOptions
  }
  interface Window extends KeplrWindow {
    keplr: CustomKeplr
  }
}

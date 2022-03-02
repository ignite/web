// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { FungibleTokenPacketData } from './types/ibc/applications/transfer/v2/packet'

type PiniaState = {
  FungibleTokenPacketDataAll: FungibleTokenPacketData[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      FungibleTokenPacketDataAll: []
    }
  }
}

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore

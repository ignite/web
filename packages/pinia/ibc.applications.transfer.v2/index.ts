// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'
import { FungibleTokenPacketData } from 'ts-client/ibc.applications.transfer.v2/types'

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

const usePiniaStore = defineStore('ibc.applications.transfer.v2', piniaStore)

export default usePiniaStore

// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'
import {
  DenomTrace,
  FungibleTokenPacketData,
  Params
} from 'ts-client/ibc.applications.transfer.v1/types'

type PiniaState = {
  FungibleTokenPacketDataAll: FungibleTokenPacketData[]
  DenomTraceAll: DenomTrace[]
  ParamsAll: Params[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      FungibleTokenPacketDataAll: [],
      DenomTraceAll: [],
      ParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('ibc.applications.transfer.v1', piniaStore)

export default usePiniaStore

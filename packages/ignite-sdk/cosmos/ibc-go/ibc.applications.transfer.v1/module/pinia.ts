// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { DenomTrace } from './types/ibc/applications/transfer/v1/transfer'
import { Params } from './types/ibc/applications/transfer/v1/transfer'

type PiniaState = {
  DenomTraceAll: DenomTrace[]
  ParamsAll: Params[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      DenomTraceAll: [],
      ParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore

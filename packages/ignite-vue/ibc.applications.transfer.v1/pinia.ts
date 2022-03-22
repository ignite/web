// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  DenomTrace,
  Params
} from '@ignt/client/ibc.applications.transfer.v1/types'
import { defineStore } from 'pinia'

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

const usePiniaStore = defineStore('ibc.applications.transfer.v1', piniaStore)

export { PiniaState, usePiniaStore }
